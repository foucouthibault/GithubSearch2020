import React, { useEffect, useState } from 'react'
import { Layout, Spinner } from '@ui-kitten/components'
import { Repository } from '../../types/repositories/repository.type'
import useGetRepo from '../../hooks/repositories/useGetRepo.hook'
import RepositoryDetails from './RepositoryDetails/RepositoryDetails.component'
import RepositoryHeader from './RepositoryHeader/RepositoryHeader.component'

type RepoRendererProps = {
  fetchRepoUrl?: string
}

const RepoRenderer: React.FC<RepoRendererProps> = (props: RepoRendererProps) => {
  const { fetchRepoUrl } = props
  const [repo, setRepo] = useState<Repository>()
  const [loading, setLoading] = useState<boolean>(!!fetchRepoUrl)
  const { dispatchGetRepo } = useGetRepo()

  useEffect(() => {
    if (fetchRepoUrl) {
      dispatchGetRepo(fetchRepoUrl)
        .then((data) => {
          setRepo(data.data)
        })
        .finally(() => setLoading(false))
    }
  }, [fetchRepoUrl])

  return (() => {
    if (!repo || loading) {
      return (
        <Layout level="2" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Spinner status="primary" />
        </Layout>
      )
    }

    return (
      <Layout level="2" style={{ flex: 1 }}>
        <RepositoryHeader repo={repo} />
        <RepositoryDetails repo={repo} />
      </Layout>
    )
  })()
}

export default RepoRenderer
