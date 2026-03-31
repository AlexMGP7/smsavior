const isGithubActions = process.env.GITHUB_ACTIONS === "true";
const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1] ?? "";

export const siteBasePath =
  isGithubActions && repoName ? `/${repoName}` : "";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) {
    return `${siteBasePath}/${path}`.replace(/\/{2,}/g, "/");
  }

  return `${siteBasePath}${path}`;
}
