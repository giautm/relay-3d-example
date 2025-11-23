import {fetchQuery} from '@/lib/relay/getServerSideProps';
import {loadServerModules} from '@/lib/relay/serverModuleLoader';
import preLoadedQuery from '@/__generated__/issuesPageQuery.graphql';
import IssuesClient from './IssuesClient';

export default async function Issues({
  params,
  searchParams,
}: {
  params: Promise<{cloudId: string}>;
  searchParams: Promise<{jql?: string; page?: string}>;
}) {
  const {cloudId} = await params;
  const search = await searchParams;

  const preloadedQuery = await fetchQuery(preLoadedQuery, {
    cloudId,
    id: 'issues',
    jql: search.jql ?? null,
    page: search.page ? parseInt(search.page) : 1,
  });

  // Pre-load 3D modules on the server for Server 3D
  if (preloadedQuery.modules) {
    await loadServerModules(preloadedQuery.modules);
  }

  return <IssuesClient preloadedQuery={preloadedQuery} />;
}

