const GITHUB_REPO_API_ENDPOINT = "https://api.github.com/repos";
const GITHUB_REPO_STAR_BADGE = "https://img.shields.io/github/stars";

export function getRepoStarBadge(repoUrl: string) {
  try {
    const spliteRepoUrl = repoUrl.replace("https://", "").split("/");
    return `${GITHUB_REPO_STAR_BADGE}/${spliteRepoUrl[1]}/${
      spliteRepoUrl[2].split("#")[0]
    }?style=flat&logo=github`;
  } catch (error) {
    return null;
  }
}
