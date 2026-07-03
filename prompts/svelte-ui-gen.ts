import {
  getCode,
  octokit,
  vxDevPrefix,
  applyPR,
  composeWorkflow,
  shadcnRules,
  getFileContent,
} from "./common.ts";
import { join } from "https://deno.land/std@0.188.0/path/mod.ts";

const svelteUiGenLabel = `svelte-ui-gen`;

const __dirname = new URL(".", import.meta.url).pathname;
const systemPrompt = await Deno.readTextFile(
  join(__dirname, "./svelte-ui-gen.md")
);

const PLACEHOLDER_CODE = `<p>vx.dev placeholder</p>`;

function getCurrentCode(owner: string, repo: string, branch: string) {
  return getFileContent(
    owner,
    repo,
    branch,
    "svelte-preview-ui/src/routes/preview.svelte"
  );
}

function refineCode(code: string) {
  const scriptRegex = /<script>([\s\S]*?)<\/script>/;
  const matches = code.match(scriptRegex);

  if (!matches) {
    return code;
  }

  const scriptContent = matches[1];

  // Substitui `import { A, B } from '$lib/components/ui'` por imports individuais
  const barrelImportRegex = /import\s*\{([^}]+)\}\s*from\s*['"]\$lib\/components\/ui['"]\s*;?/g;
  let newScriptContent = scriptContent;
  let extraImports = "";

  const barrelMatch = barrelImportRegex.exec(scriptContent);
  if (barrelMatch) {
    const components = barrelMatch[1]
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);

    extraImports = mapShadcnImports(components).importStr;
    newScriptContent = scriptContent.replace(barrelImportRegex, "");
  }

  return code.replace(scriptContent, "\n" + extraImports + newScriptContent);
}

function mapShadcnImports(used: string[]) {
  const importMap: Record<string, Set<string>> = {};

  for (const u of used) {
    let source = "";

    for (const rule of shadcnRules) {
      if (new RegExp(rule.matcher).test(u)) {
        source = rule.source.replace("@/components", "$lib/components");
        break;
      }
    }

    if (!source) {
      continue;
    }

    if (!importMap[source]) {
      importMap[source] = new Set();
    }
    importMap[source].add(u);
  }

  let importStr = "";
  for (const key in importMap) {
    const statement = `import { ${Array.from(importMap[key]).join(
      ", "
    )} } from '${key}';`;
    importStr += `${statement}\r\n`;
  }

  return { importStr };
}

async function main() {
  const result = await composeWorkflow(svelteUiGenLabel, {
    "svelte-preview-ui/src/routes/preview.svelte": PLACEHOLDER_CODE,
  });

  if (!result) {
    return;
  }

  const { commitMsg, images, owner, repo, branch, issue, pr } = result;
  let { prompt } = result;

  const currentCode = await getCurrentCode(owner, repo, branch);
  if (currentCode !== PLACEHOLDER_CODE) {
    prompt += `
Previously you already implemented the following code, use it as a reference and meet my new requirements:
\`\`\`svelte
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
    "gpt-4-vision-preview"
  );
  console.log(JSON.stringify(usage, null, 2));

  await applyPR(
    owner,
    repo,
    issue.number,
    branch,
    {
      "svelte-preview-ui/src/routes/preview.svelte": refineCode(code),
      "scripts/build-task": "svelte-preview-ui",
    },
    `${vxDevPrefix} prompt:\r\n${commitMsg}`,
    [svelteUiGenLabel]
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
