import { RepoDocumentation } from "@/components/repo-documentation"

interface RepoPageProps {
  params: Promise<{
    owner: string
    repo: string
  }>
}

export default async function RepoPage({ params }: RepoPageProps) {
  const { owner, repo } = await params

  return <RepoDocumentation owner={owner} repo={repo} />
}
