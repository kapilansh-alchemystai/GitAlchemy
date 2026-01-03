import { RepoChat } from "@/components/repo-chat"
import type { Metadata } from "next"

interface RepoChatPageProps {
  params: Promise<{
    owner: string
    repo: string
  }>
  searchParams: Promise<{
    q?: string
  }>
}

export async function generateMetadata({ params }: RepoChatPageProps): Promise<Metadata> {
  const { owner, repo } = await params
  return {
    title: `Chat - ${owner}/${repo} | GitAlchemy`,
  }
}

export default async function RepoChatPage(props: RepoChatPageProps) {
  try {
    const { owner, repo } = await props.params
    const resolvedSearchParams = await props.searchParams
    const q = resolvedSearchParams?.q

    return <RepoChat owner={owner} repo={repo} initialQuery={q} />
  } catch (error) {
    console.error("Error in RepoChatPage:", error)
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Error loading chat</h1>
          <p className="text-muted-foreground">{String(error)}</p>
        </div>
      </div>
    )
  }
}
