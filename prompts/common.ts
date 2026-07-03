import { retryAsync } from "https://deno.land/x/retry@v2.0.0/mod.ts";
import OpenAI from "https://deno.land/x/openai@v4.20.1/mod.ts";
import {
  ChatCompletionMessageParam,
  CompletionUsage,
} from "https://deno.land/x/openai@v4.20.1/resources/mod.ts";
import { assert } from "https://deno.land/std@0.201.0/assert/assert.ts";
import { ChatCompletionCreateParamsBase } from "https://deno.land/x/openai@v4.20.1/resources/chat/completions.ts";
import { checkValid } from "./quota.ts";

const apiKey = Deno.env.get("DEEPSEEK_API_KEY") || Deno.env.get("OPENAI_API_KEY");
assert(apiKey, "failed to get DeepSeek API key (set DEEPSEEK_API_KEY)");

const openai = new OpenAI({
  apiKey: apiKey,
  baseURL: "https://api.deepseek.com/v1",
});

export async function getCode(
  messages: ChatCompletionMessageParam[] = [],
  model: ChatCompletionCreateParamsBase["model"]
): Promise<{
  code: string;
  usage?: CompletionUsage | undefined;
  description: string;
}> {
  return await retryAsync<{
    code: string;
    usage?: CompletionUsage | undefined;
    description: string;
  }>(
    async () => {
      const chatCompletion = await openai.chat.completions.create({
        messages,
        model,
        max_tokens: 3000,
        temperature: 0,
      });

      const rawContent = chatCompletion.choices[0].message.content || "";
      console.log("raw output> ", rawContent);

      // Tenta extrair blocos de código markdown ```...```
      const codeBlockRegex = /```[\w]*\r?\n?([\s\S]*?)```/g;
      const codeBlocks: string[] = [];
      let match;
      while ((match = codeBlockRegex.exec(rawContent)) !== null) {
        codeBlocks.push(match[1].trim());
      }

      let code: string;
      let description: string;

      if (codeBlocks.length >= 1) {
        // Usa o primeiro bloco de código encontrado
        code = codeBlocks[0];
        // Remove todos os blocos de código do markdown
        description = rawContent
          .replace(/```[\w]*\r?\n?[\s\S]*?```/g, "")
          .trim();
      } else {
        // Sem blocos markdown: usa o conteúdo inteiro como código
        code = rawContent.trim();
        description = "";
      }

      return {
        code,
        usage: chatCompletion.usage,
        description,
      };
    },
    { delay: 100, maxTry: 3 }
  );
}

type IssueEvent = {
  actor: { login: string };
  action: string;
  issue: {
    body: string;
    number: number;
    labels: { name: string }[];
    user: { login: string };
    pull_request?: { url: string };
    state: string;
  };
  comment?: {
    body: string;
  };
};

// ── Native GitHub API client (fetch-based, no npm dependencies) ──────────

const ghToken = Deno.env.get("GH_TOKEN");
assert(ghToken, "failed to get github token");

const GITHUB_API_BASE = "https://api.github.com";

async function ghRequest(
  method: string,
  path: string,
  body?: unknown,
): Promise<{ data: unknown; headers: Headers }> {
  const url = path.startsWith("http") ? path : `${GITHUB_API_BASE}${path}`;
  const headers: Record<string, string> = {
    "Authorization": `Bearer ${ghToken}`,
    "Accept": "application/vnd.github.v3+json",
    "User-Agent": "vx.dev",
  };
  if (body !== undefined) {
    headers["Content-Type"] = "application/json";
  }
  const res = await fetch(url, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub API ${method} ${path} failed (${res.status}): ${text}`);
  }
  const data = await res.json();
  return { data, headers: res.headers };
}

// deno-lint-ignore no-explicit-any
function createRestClient(): Record<string, Record<string, (...args: any[]) => any>> {
  // deno-lint-ignore no-explicit-any
  const rest: Record<string, Record<string, (...args: any[]) => any>> = {};

  const def = (ns: string, method: string, httpMethod: string, pathTemplate: string) => {
    if (!rest[ns]) rest[ns] = {};
    // Extrai os placeholders do template (ex: {owner}, {repo}, {path})
    const pathPlaceholders = new Set(
      [...pathTemplate.matchAll(/\{(\w+)\}/g)].map((m) => m[1])
    );
    rest[ns][method] = async (params: Record<string, unknown>) => {
      let path = pathTemplate;
      // Substitui placeholders no path
      for (const k of pathPlaceholders) {
        const v = params[k];
        if (typeof v === "string" || typeof v === "number") {
          path = path.replace(`{${k}}`, String(v));
        }
      }
      // Parâmetros que não são placeholders viram query params (GET) ou body
      const queryParams = new URLSearchParams();
      const bodyParams: Record<string, unknown> = {};
      for (const [k, v] of Object.entries(params)) {
        if (pathPlaceholders.has(k)) continue;
        if (httpMethod === "GET" || httpMethod === "HEAD") {
          if (v !== undefined && v !== null) queryParams.append(k, String(v));
        } else {
          if (k === "q" && ns === "search") {
            queryParams.append(k, String(v));
          } else {
            bodyParams[k] = v;
          }
        }
      }
      const qs = queryParams.toString();
      const fullPath = qs ? `${path}?${qs}` : path;
      const body = httpMethod !== "GET" && Object.keys(bodyParams).length > 0 ? bodyParams : undefined;
      const { data } = await ghRequest(httpMethod, fullPath, body);
      return { data };
    };
  };

  // Repos
  def("repos", "getContent", "GET", "/repos/{owner}/{repo}/contents/{path}");

  // Issues
  def("issues", "get", "GET", "/repos/{owner}/{repo}/issues/{issue_number}");
  def("issues", "listComments", "GET", "/repos/{owner}/{repo}/issues/{issue_number}/comments");
  def("issues", "setLabels", "PUT", "/repos/{owner}/{repo}/issues/{issue_number}/labels");
  def("issues", "createComment", "POST", "/repos/{owner}/{repo}/issues/{issue_number}/comments");

  // Pulls
  def("pulls", "create", "POST", "/repos/{owner}/{repo}/pulls");
  def("pulls", "get", "GET", "/repos/{owner}/{repo}/pulls/{pull_number}");
  def("pulls", "listReviewComments", "GET", "/repos/{owner}/{repo}/pulls/{pull_number}/comments");

  // Search
  def("search", "issuesAndPullRequests", "GET", "/search/issues");

  // Git
  def("git", "getRef", "GET", "/repos/{owner}/{repo}/git/ref/{ref}");
  def("git", "createRef", "POST", "/repos/{owner}/{repo}/git/refs");
  def("git", "createBlob", "POST", "/repos/{owner}/{repo}/git/blobs");
  def("git", "getCommit", "GET", "/repos/{owner}/{repo}/git/commits/{commit_sha}");
  def("git", "createTree", "POST", "/repos/{owner}/{repo}/git/trees");
  def("git", "createCommit", "POST", "/repos/{owner}/{repo}/git/commits");
  def("git", "updateRef", "PATCH", "/repos/{owner}/{repo}/git/refs/{ref}");

  // Actions
  def("actions", "listRepoWorkflows", "GET", "/repos/{owner}/{repo}/actions/workflows");
  def("actions", "listWorkflowRuns", "GET", "/repos/{owner}/{repo}/actions/workflows/{workflow_id}/runs");

  // Activity
  def("activity", "listStargazersForRepo", "GET", "/repos/{owner}/{repo}/stargazers");

  return rest;
}

// deno-lint-ignore no-explicit-any
async function* paginateIterator<T>(
  method: (params: Record<string, unknown>) => Promise<{ data: T[] }>,
  params: Record<string, unknown>,
): AsyncGenerator<{ data: T[] }> {
  let url: string | null = null;
  const baseParams: Record<string, unknown> = { ...params, per_page: params.per_page || 100, page: 1 };

  while (true) {
    let result: { data: T[]; headers: Headers };
    if (url) {
      const res = await ghRequest("GET", url);
      result = { data: res.data as T[], headers: res.headers };
    } else {
      const page = (baseParams.page as number) || 1;
      const res = await method({ ...baseParams, page });
      // We need to get the response with headers. Since our rest methods return {data} only,
      // we do a raw request to get headers for pagination.
      let path = "";
      // Reconstruct the URL from the params
      const owner = baseParams.owner as string;
      const repo = baseParams.repo as string;
      if (method.name === "listWorkflowRuns" || String(method).includes("listWorkflowRuns")) {
        path = `/repos/${owner}/${repo}/actions/workflows/${baseParams.workflow_id}/runs`;
      } else if (String(method).includes("listStargazersForRepo")) {
        path = `/repos/${owner}/${repo}/stargazers`;
      } else if (String(method).includes("listComments")) {
        path = `/repos/${owner}/${repo}/issues/${(baseParams as Record<string,unknown>).issue_number}/comments`;
      } else if (String(method).includes("listReviewComments")) {
        path = `/repos/${owner}/${repo}/pulls/${(baseParams as Record<string,unknown>).pull_number}/comments`;
      } else {
        // fallback: use the method itself
        result = { data: (await method(baseParams)).data, headers: new Headers() };
        yield result;
        break;
      }
      const qs = new URLSearchParams();
      for (const [k, v] of Object.entries(baseParams)) {
        if (k !== "owner" && k !== "repo" && k !== "workflow_id" && k !== "issue_number" && k !== "pull_number" && v !== undefined) {
          qs.append(k, String(v));
        }
      }
      const fullUrl = qs.toString() ? `${GITHUB_API_BASE}${path}?${qs.toString()}` : `${GITHUB_API_BASE}${path}`;
      const rawRes = await ghRequest("GET", fullUrl);
      result = { data: rawRes.data as T[], headers: rawRes.headers };
    }

    yield { data: result.data };

    // Check Link header for next page
    const linkHeader = result.headers.get("link");
    url = null;
    if (linkHeader) {
      const match = linkHeader.match(/<([^>]+)>;\s*rel="next"/);
      if (match) {
        url = match[1];
      } else {
        break;
      }
    } else {
      break;
    }
  }
}

// deno-lint-ignore no-explicit-any
class GitHubAPI {
  // deno-lint-ignore no-explicit-any
  rest: Record<string, Record<string, (...args: any[]) => any>>;
  paginate: {
    iterator: <T>(
      method: (params: Record<string, unknown>) => Promise<{ data: T[] }>,
      params: Record<string, unknown>,
    ) => AsyncGenerator<{ data: T[] }>;
  };

  constructor() {
    this.rest = createRestClient();
    this.paginate = {
      iterator: paginateIterator,
    };
  }

  async graphql<T>(query: string, variables?: Record<string, unknown>): Promise<T> {
    const { data } = await ghRequest("POST", "/graphql", { query, variables });
    return (data as { data: T }).data;
  }
}

export const octokit = new GitHubAPI();

export const vxDevPrefix = `[vx.dev]`;

function isValidComment(
  comment: {
    body?: string;
    user?: { login: string } | null;
  },
  login: string
) {
  return !comment.body?.includes(vxDevPrefix) && comment.user?.login === login;
}

async function getConnectedPr(
  owner: string,
  repo: string,
  issueNumber: number
) {
  const connectedEvent = await octokit.graphql<{
    repository: {
      issue?: {
        timelineItems: {
          nodes: {
            id: string;
            source: { number: number; state: string };
            __typename: string;
            createdAt: string;
          }[];
        };
      };
    };
  }>(`{
    repository(owner: "${owner}", name: "${repo}") {
      issue(number: ${issueNumber}) {
        timelineItems(itemTypes: [CROSS_REFERENCED_EVENT], first: 1) {
          nodes {
            ... on CrossReferencedEvent {
              id
              createdAt
              source {
                ... on PullRequest {
                  id
                  number
                  state
                }
              }
              __typename
            }
          }
        }
      }
    }
  }`);

  let { nodes = [] } = connectedEvent.repository.issue?.timelineItems || {};
  nodes = nodes
    .filter((n) => n.source.state === "OPEN")
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  return nodes[0]?.source.number;
}

async function getConnectedIssue(owner: string, repo: string, prBody: string) {
  const issueNumber = parseInt(
    prBody.match(/\[vx\.dev\] This PR implements #(\d+),/)?.[1] || ""
  );
  if (!issueNumber) {
    throw new Error("failed to get connected issue");
  }

  return (
    await octokit.rest.issues.get({
      owner,
      repo,
      issue_number: issueNumber,
    })
  ).data;
}

export async function applyPR(
  owner: string,
  repo: string,
  issueNumber: number,
  newBranch: string,
  files: Record<string, string>,
  commitMsg: string,
  labels: string[]
) {
  const baseBranch = "main";

  // Get the base branch SHA
  const baseRef = await octokit.rest.git.getRef({
    owner,
    repo,
    ref: `heads/${baseBranch}`,
  });
  const baseSha = baseRef.data.object.sha;

  // Get or create the target branch
  let branchSha: string;
  try {
    const branchRef = await octokit.rest.git.getRef({
      owner,
      repo,
      ref: `heads/${newBranch}`,
    });
    branchSha = branchRef.data.object.sha;
  } catch {
    await octokit.rest.git.createRef({
      owner,
      repo,
      ref: `refs/heads/${newBranch}`,
      sha: baseSha,
    });
    branchSha = baseSha;
  }

  // Create blobs for each file
  const fileBlobs = await Promise.all(
    Object.entries(files).map(async ([path, content]) => {
      const blob = await octokit.rest.git.createBlob({
        owner,
        repo,
        content,
        encoding: "utf-8",
      });
      return {
        path,
        mode: "100644" as const,
        type: "blob" as const,
        sha: blob.data.sha,
      };
    })
  );

  // Get current tree SHA from the branch's latest commit
  const branchCommit = await octokit.rest.git.getCommit({
    owner,
    repo,
    commit_sha: branchSha,
  });
  const currentTreeSha = branchCommit.data.tree.sha;

  // Create a new tree with the file blobs
  const newTree = await octokit.rest.git.createTree({
    owner,
    repo,
    base_tree: currentTreeSha,
    tree: fileBlobs,
  });

  // Create a new commit
  const newCommit = await octokit.rest.git.createCommit({
    owner,
    repo,
    message: commitMsg,
    tree: newTree.data.sha,
    parents: [branchSha],
  });

  // Update the branch reference
  await octokit.rest.git.updateRef({
    owner,
    repo,
    ref: `heads/${newBranch}`,
    sha: newCommit.data.sha,
  });

  // Busca PR existente via API REST (tempo real, sem delay de indexação)
  let pr = (
    await octokit.rest.pulls.list({
      owner,
      repo,
      head: `${owner}:${newBranch}`,
      base: baseBranch,
      state: "open",
    })
  ).data[0];

  if (!pr) {
    try {
      pr = (
        await octokit.rest.pulls.create({
          owner,
          repo,
          head: newBranch,
          base: baseBranch,
          title: `${vxDevPrefix} implements #${issueNumber}`,
          body: `${vxDevPrefix} This PR implements #${issueNumber}, created by vx.dev.`,
        })
      ).data;
    } catch (e) {
      // PR já existe (race condition) — busca novamente
      if (e instanceof Error && e.message.includes("422")) {
        pr = (
          await octokit.rest.pulls.list({
            owner,
            repo,
            head: `${owner}:${newBranch}`,
            base: baseBranch,
            state: "open",
          })
        ).data[0];
        if (!pr) throw e;
      } else {
        throw e;
      }
    }
  }

  octokit.rest.issues.setLabels({
    owner,
    repo,
    issue_number: pr.number,
    labels,
  });

  return pr;
}

async function collectPromptAndImages(
  owner: string,
  repo: string,
  issue: {
    number: number;
    body?: string | null;
    user?: { login: string } | null;
  },
  pr: { number: number },
  branch: string
) {
  const prComments = (
    await octokit.rest.issues.listComments({
      owner,
      repo,
      issue_number: pr.number,
    })
  ).data;
  const issueComments = (
    await octokit.rest.issues.listComments({
      owner,
      repo,
      issue_number: issue.number,
    })
  ).data;

  let commentsStr = issueComments
    .concat(prComments)
    .filter((c) => isValidComment(c, issue.user?.login || "-"))
    .sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    )
    .map((c) => c.body)
    .join("\n");

  const prReviews = (
    await octokit.rest.pulls.listReviewComments({
      owner,
      repo,
      pull_number: pr.number,
    })
  ).data;
  for (const r of prReviews
    .filter(
      (r) =>
        isValidComment(r, issue.user?.login || "-") &&
        r.commit_id === r.original_commit_id
    )
    .sort(
      (a, b) =>
        new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
    )) {
    let lineCode = "";
    if (r.line) {
      const code = await getFileContent(owner, repo, branch, r.path);
      lineCode = (code || "").split("\n")[r.line - 1];
    }
    if (lineCode) {
      commentsStr += `\nIn your previous implemented code, I want to modify this part:
\`\`\`
${lineCode}
\`\`\`
by following the instruction:`;
    }
    commentsStr += `\n${r.body}\n`;
  }

  let prompt = `${issue.body || ""}\n${commentsStr}`;
  const regex = /!\[.*?\]\((.*?)\)/g;
  const imgRegex = /<img .*?src="(.*?)".*?>/g;
  const images = [];
  let match;
  while ((match = regex.exec(prompt)) !== null) {
    images.push(match[1]);
  }

  let imgMatch;
  while ((imgMatch = imgRegex.exec(prompt)) !== null) {
    images.push(imgMatch[1]);
  }
  prompt = prompt.replace(regex, "").replace(imgRegex, "");

  return {
    prompt,
    images,
  };
}

export const lucideIcons: Record<string, unknown> = {};
try {
  const iconNodes = await (
    await fetch("https://lucide.dev/api/icon-nodes")
  ).json();
  for (const key in iconNodes) {
    const newKey = key
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");
    lucideIcons[newKey] = iconNodes[key];
  }
} catch {}

export async function getIssueEvent() {
  const githubEventPath = Deno.env.get("GITHUB_EVENT_PATH");
  assert(githubEventPath, "failed to get github event path");

  let githubEvent: IssueEvent = (
    await import(githubEventPath, {
      with: { type: "json" },
    })
  ).default;

  const eventName = Deno.env.get("GITHUB_EVENT_NAME");
  assert(eventName, "failed to get event name");

  const actor = Deno.env.get("ACTOR");
  assert(actor, "failed to get actor");

  if (eventName === "pull_request_review_comment") {
    const { action, comment, pull_request } = githubEvent as unknown as {
      action: string;
      comment: { body: string };
      pull_request: { body: string };
    };
    const { owner, repo } = getOwnerAndRepo();

    githubEvent = {
      actor: {
        login: actor,
      },
      action,
      comment,
      issue: (await getConnectedIssue(
        owner,
        repo,
        pull_request.body
      )) as IssueEvent["issue"],
    };
  }

  return {
    githubEvent: {
      ...githubEvent,
      actor: {
        login: actor,
      },
    },
    eventName,
  };
}

function getOwnerAndRepo() {
  const owner = Deno.env.get("GITHUB_REPOSITORY_OWNER");
  assert(owner, "failed to get repo owner");

  let repo = Deno.env.get("GITHUB_REPOSITORY");
  assert(repo, "failed to get repo name");
  repo = repo.replace(`${owner}/`, "");

  return {
    owner,
    repo,
  };
}

export async function composeWorkflow(
  label: string,
  placeholderFiles: Record<string, string>
) {
  const { githubEvent, eventName } = await getIssueEvent();

  console.log(
    githubEvent.action,
    eventName,
    githubEvent.issue,
    githubEvent.comment,
    githubEvent.actor
  );

  const isPr = Boolean(githubEvent.issue.pull_request);

  if (githubEvent.issue.labels.every((l) => l.name !== label)) {
    throw new Error("label mismatch");
  }

  if (isPr && eventName === "issues") {
    throw new Error("non-comments event in PR");
  }

  if (
    ["issue_comment", "pull_request_review_comment"].includes(eventName) &&
    githubEvent.comment &&
    !isValidComment(githubEvent.comment, githubEvent.issue.user.login)
  ) {
    throw new Error("invalid comment");
  }

  if (githubEvent.issue.state !== "open") {
    throw new Error("closed issue/PR");
  }

  const { owner, repo } = getOwnerAndRepo();

  // check whitelist and quota
  const valid = await checkValid(owner, repo, githubEvent.actor.login);
  if (!valid) {
    throw new Error(
      "invalid request, please check the whitelist or quota config"
    );
  }

  const issue = isPr
    ? await getConnectedIssue(owner, repo, githubEvent.issue.body)
    : githubEvent.issue;

  const branch = `${label}-issue-${issue.number}`;

  let pr: { number: number } = { number: -1 };
  if (isPr) {
    // is PR event
    pr = githubEvent.issue;
  } else {
    const connectedPrNumber = await getConnectedPr(owner, repo, issue.number);
    pr = connectedPrNumber
      ? (
          await octokit.rest.pulls.get({
            owner,
            repo,
            pull_number: connectedPrNumber,
          })
        ).data
      : await applyPR(
          owner,
          repo,
          issue.number,
          branch,
          placeholderFiles,
          "[Skip CI] vx.dev: init the PR",
          [label]
        );
  }

  const { prompt, images } = await collectPromptAndImages(
    owner,
    repo,
    issue,
    pr,
    branch
  );
  const commitMsg = JSON.stringify(
    {
      prompt,
      images,
    },
    null,
    2
  );

  return {
    commitMsg,
    prompt,
    images,
    owner,
    repo,
    branch,
    issue,
    pr,
  };
}

export const shadcnRules = [
  {
    matcher: "^Avatar.*",
    source: "@/components/ui/avatar",
  },
  {
    matcher: "^AspectRatio",
    source: "@/components/ui/aspect-ratio",
  },
  {
    matcher: "^Badge",
    source: "@/components/ui/badge",
  },
  {
    matcher: "^Button",
    source: "@/components/ui/button",
  },
  {
    matcher: "^Card.*",
    source: "@/components/ui/card",
  },
  {
    matcher: "^Checkbox",
    source: "@/components/ui/checkbox",
  },
  {
    matcher: "^Collapsible.*",
    source: "@/components/ui/collapsible",
  },
  {
    matcher: "^Menubar.*",
    source: "@/components/ui/menubar",
  },
  {
    matcher: "^Select.*",
    source: "@/components/ui/select",
  },
  {
    matcher: "^RadioGroup.*",
    source: "@/components/ui/radio-group",
  },
  {
    matcher: "^Textarea",
    source: "@/components/ui/textarea",
  },
  {
    matcher: "^ToggleGroup.*",
    source: "@/components/ui/toggle-group",
  },
  {
    matcher: "^Toggle",
    source: "@/components/ui/toggle",
  },
  {
    matcher: "^Skeleton",
    source: "@/components/ui/skeleton",
  },
  {
    matcher: "^Slider",
    source: "@/components/ui/slider",
  },
  {
    matcher: "^Tooltip.*",
    source: "@/components/ui/tooltip",
  },
  {
    matcher: "^Label",
    source: "@/components/ui/label",
  },
  {
    matcher: "^Input",
    source: "@/components/ui/input",
  },
  {
    matcher: "^ScrollArea",
    source: "@/components/ui/scroll-area",
  },
  {
    matcher: "^Switch",
    source: "@/components/ui/switch",
  },
  {
    matcher: "^Dialog.*",
    source: "@/components/ui/dialog",
  },
  {
    matcher: "^Sheet.*",
    source: "@/components/ui/sheet",
  },
  {
    matcher: "^Separator",
    source: "@/components/ui/separator",
  },
  {
    matcher: "^NavigationMenu.*",
    source: "@/components/ui/navigation-menu",
  },
  {
    matcher: "^HoverCard.*",
    source: "@/components/ui/hover-card",
  },
  {
    matcher: "^DropdownMenu.*",
    source: "@/components/ui/dropdown-menu",
  },
  {
    matcher: "^Accordion.*",
    source: "@/components/ui/accordion",
  },
  {
    matcher: "^AlertDialog.*",
    source: "@/components/ui/alert-dialog",
  },
  {
    matcher: "^Alert.*",
    source: "@/components/ui/alert",
  },
  {
    matcher: "^Table.*",
    source: "@/components/ui/table",
  },
  {
    matcher: "^Tabs.*",
    source: "@/components/ui/tabs",
  },
  {
    matcher: "^Popover.*",
    source: "@/components/ui/popover",
  },
  {
    matcher: "^Calendar",
    source: "@/components/ui/calendar",
  },
  {
    matcher: "^Command.*",
    source: "@/components/ui/command",
  },
  {
    matcher: "^ContextMenu.*",
    source: "@/components/ui/context-menu",
  },
  {
    matcher: "^Carousel.*",
    source: "@/components/ui/carousel",
  },
  {
    matcher: "^Drawer.*",
    source: "@/components/ui/drawer",
  },
  {
    matcher: "^Pagination.*",
    source: "@/components/ui/pagination",
  },
  {
    matcher: "^Resizable.*",
    source: "@/components/ui/resizable",
  },
  {
    matcher: "^ResponsiveBar",
    source: "@nivo/bar",
  },
  {
    matcher: "^ResponsiveLine",
    source: "@nivo/line",
  },
  {
    matcher: "^ResponsivePie",
    source: "@nivo/pie",
  },
  {
    matcher: "^ResponsiveScatterPlot",
    source: "@nivo/scatterplot",
  },
  {
    matcher: "^ResponsiveHeatMap",
    source: "@nivo/heatmap",
  },
];

export async function getFileContent(
  owner: string,
  repo: string,
  branch: string,
  path: string
) {
  try {
    const code = (
      await octokit.rest.repos.getContent({
        owner,
        repo,
        ref: branch,
        path,
      })
    ).data;

    if (code && typeof code === "object" && "type" in code && code.type === "file") {
      return atob(code.content as string);
    }
  } catch (e) {
    // Branch/arquivo não encontrado — retorna undefined
    if (e instanceof Error && e.message.includes("404")) {
      return undefined;
    }
    throw e;
  }
}
