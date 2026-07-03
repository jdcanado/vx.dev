import { join } from "https://deno.land/std@0.188.0/path/mod.ts";
import {
  getCode,
  octokit,
  vxDevPrefix,
  applyPR,
  lucideIcons,
  composeWorkflow,
  shadcnRules,
  getFileContent,
} from "./common.ts";

const uiGenLabel = `ui-gen`;

const __dirname = new URL(".", import.meta.url).pathname;
const systemPrompt = await Deno.readTextFile(join(__dirname, "./ui-gen.md"));

const PLACEHOLDER_CODE = `export default function VxDev() { return <p>vx.dev placeholder</p>; }`;
function getCurrentCode(owner: string, repo: string, branch: string) {
  return getFileContent(owner, repo, branch, "preview-ui/src/Preview.jsx");
}

function mapImports(used: string[], declarations: Set<string>) {
  const importMap: Record<string, Set<string>> = {};
  const fallbacks: string[] = [];

  for (const u of used) {
    let source = "";
    let fallback = false;

    for (const rule of shadcnRules) {
      if (new RegExp(rule.matcher).test(u)) {
        source = rule.source;
        break;
      }
    }

    if (!source && lucideIcons[u]) {
      source = "lucide-react";
    }

    if (!source && declarations.has(u)) {
      continue;
    }

    if (!source) {
      // fallback to Home icon
      source = "lucide-react";
      fallback = true;
      fallbacks.push(u);
    }

    if (!importMap[source]) {
      importMap[source] = new Set();
    }
    importMap[source].add(fallback ? "Home" : u);
  }

  let importStr = "";
  for (const key in importMap) {
    const statement = `import { ${Array.from(importMap[key]).join(
      ", "
    )} } from '${key}';`;
    importStr += `${statement}\r\n`;
  }

  return { importStr, fallbacks };
}

function refineCode(code: string) {
  const fromReact = new Set<string>();
  const usedVariables = new Set<string>();
  const declarations = new Set<string>();

  // Extrai imports de 'react' e remove todos os outros imports
  const reactImportRegex = /import\s*\{([^}]*)\}\s*from\s*['"]react['"]\s*;?/g;
  let reactImportMatch;
  while ((reactImportMatch = reactImportRegex.exec(code)) !== null) {
    const specifiers = reactImportMatch[1]
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
    for (const s of specifiers) {
      // lida com { useState, useEffect } e { useState as foo }
      const name = s.split(/\s+as\s+/)[0].trim();
      fromReact.add(name);
    }
  }

  // Remove todos os imports que não são de 'react'
  const nonReactImportRegex = /^import\s+(?:(?!['"]react['"]).)*?\s*;?\s*$/gm;
  // Mas preserva os imports de 'react'
  let cleanedCode = code;
  // Remove non-react imports
  cleanedCode = cleanedCode.replace(
    /^import\s+(?!(?:type\s+)?[\w\s{},*]+\s+from\s+['"]react['"]).+$/gm,
    ""
  );

  // Coleta declarações de função/variável
  const funcDeclRegex = /(?:function|const)\s+(\w+)/g;
  let fdMatch;
  while ((fdMatch = funcDeclRegex.exec(cleanedCode)) !== null) {
    declarations.add(fdMatch[1]);
  }

  // Coleta componentes JSX (tags que começam com maiúscula)
  const jsxTagRegex = /<\/?([A-Z]\w*)/g;
  let tagMatch;
  while ((tagMatch = jsxTagRegex.exec(cleanedCode)) !== null) {
    const elName = tagMatch[1];
    if (!fromReact.has(elName)) {
      usedVariables.add(elName);
    }
  }

  const { importStr, fallbacks } = mapImports(
    Array.from(usedVariables),
    declarations
  );

  // Substitui tags de componentes não encontrados (fallbacks) por <div>
  for (const fb of fallbacks) {
    cleanedCode = cleanedCode.replace(
      new RegExp(`</?${fb}[^>]*>`, "g"),
      (match) => match.replace(fb, "div")
    );
  }

  return importStr + cleanedCode;
}

async function main() {
  const result = await composeWorkflow(uiGenLabel, {
    "preview-ui/src/Preview.jsx": PLACEHOLDER_CODE,
  });

  if (!result) {
    return;
  }

  const { commitMsg, images, owner, repo, branch, issue, pr } = result;
  let { prompt } = result;

  const currentCode = await getCurrentCode(owner, repo, branch);
  if (currentCode && currentCode !== PLACEHOLDER_CODE) {
    prompt += `
Previously you already implemented the following code, use it as a reference and meet my new requirements:
\`\`\`jsx
${currentCode}
\`\`\`
`;
  }

  const { code, usage, description } = await getCode(
    [
      {
        role: "system",
        content: systemPrompt,
      },
      {
        role: "user",
        content: [
          {
            type: "text",
            text: prompt,
          },
          ...images.map(
            (image) =>
              ({
                type: "image_url",
                image_url: {
                  url: image,
                },
              } as const)
          ),
        ],
      },
    ],
    "gpt-4o"
  );
  console.log(JSON.stringify(usage, null, 2));

  await applyPR(
    owner,
    repo,
    issue.number,
    branch,
    {
      "preview-ui/src/Preview.jsx": refineCode(code),
    },
    `${vxDevPrefix} prompt:\r\n${commitMsg}`,
    [uiGenLabel]
  );

  if (description) {
    await octokit.rest.issues.createComment({
      owner,
      repo,
      issue_number: pr.number,
      body: `${vxDevPrefix}: ${description}`,
    });
  }
}

main();
