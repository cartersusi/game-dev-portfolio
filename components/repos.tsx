import { Code, Star, GitFork } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

interface Repository {
  name: string
  description: string
  language: string
  html_url: string
  stargazers_count: number
  forks_count: number
}

interface GithubReposProps {
  username: string
  repositories: string[]
}

async function fetchRepositories(username: string, repoNames: string[]) {
  try {
    const repos = await Promise.all(
      repoNames.map(async (repoName) => {
        const response = await fetch(
          `https://api.github.com/repos/${username}/${repoName}`,
          { next: { revalidate: 3600 } }, // Cache for 1 hour
        )

        if (!response.ok) {
          throw new Error(`Failed to fetch ${repoName}`)
        }

        return response.json()
      }),
    )

    return repos
  } catch (error) {
    console.error("Error fetching repositories:", error)
    return []
  }
}

export async function GithubRepos({ username, repositories }: GithubReposProps) {
  const repos = await fetchRepositories(username, repositories)

  if (!repos.length) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">Failed to load repositories. Please try again later.</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {repos.map((repo: Repository) => (
        <Card key={repo.name} className="overflow-hidden">
          <CardHeader className="pb-3">
            <CardTitle className="text-xl">
              <a href={repo.html_url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                {repo.name}
              </a>
            </CardTitle>
            <CardDescription className="line-clamp-2 h-10">
              {repo.description || "No description provided"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              {repo.language ? (
                <div className="flex items-center gap-1.5">
                  <Code className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{repo.language}</span>
                </div>
              ) : (
                <span className="text-sm text-muted-foreground">No language specified</span>
              )}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{repo.stargazers_count}</span>
                </div>
                <div className="flex items-center gap-1">
                  <GitFork className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{repo.forks_count}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function GithubReposSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {Array(count)
        .fill(0)
        .map((_, i) => (
          <Card key={i} className="overflow-hidden">
            <CardHeader className="pb-3">
              <Skeleton className="h-6 w-3/4 mb-2" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3 mt-1" />
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <Skeleton className="h-4 w-1/4" />
                <div className="flex items-center gap-3">
                  <Skeleton className="h-4 w-10" />
                  <Skeleton className="h-4 w-10" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
    </div>
  )
}

