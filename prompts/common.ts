// prompts/common.ts - Substitua todo o código do Octokit por esta implementação

export class GitHubClient {
  private token: string;
  
  constructor(token: string) {
    this.token = token;
  }
  
  async request(endpoint: string, options: any = {}) {
    const url = `https://api.github.com${endpoint}`;
    const response = await fetch(url, {
      ...options,
      headers: {
        'Authorization': `token ${this.token}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'vx-dev/1.0.0',
        ...options.headers
      }
    });
    
    if (!response.ok) {
      const error = await response.text();
      throw new Error(`GitHub API error ${response.status}: ${error}`);
    }
    
    return response.json();
  }
  
  // Métodos específicos
  async createPullRequest(owner: string, repo: string, data: any) {
    return this.request(`/repos/${owner}/${repo}/pulls`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
  
  async createCommit(owner: string, repo: string, data: any) {
    return this.request(`/repos/${owner}/${repo}/git/commits`, {
      method: 'POST',
      body: JSON.stringify(data)
    });
  }
  
  // Adicione outros métodos conforme necessário
}

// Uso no entry.ts
const github = new GitHubClient(process.env.GH_TOKEN);
const pr = await github.createPullRequest('owner', 'repo', {
  title: 'PR Title',
  head: 'branch',
  base: 'main',
  body: 'PR Description'
});
