import {fetchQuery} from '@/lib/relay/getServerSideProps';
import {loadServerModules} from '@/lib/relay/serverModuleLoader';
import preLoadedQuery from '@/__generated__/TypeBasedDirectoryPageQuery.graphql';
import DirectoryClient from './DirectoryClient';

export default async function Directory({
  params,
  searchParams,
}: {
  params: Promise<{cloudId: string; type: string}>;
  searchParams: Promise<{
    contains?: string;
    selectedProjectType?: string;
    selectedCategory?: string;
    page?: string;
    sortKey?: string;
    sortOrder?: string;
  }>;
}) {
  const {cloudId, type} = await params;
  const search = await searchParams;

  const preloadedQuery = await fetchQuery(preLoadedQuery, {
    cloudId,
    id: type,
    searchText: search.contains ?? null,
    selectedTypes: search.selectedProjectType?.split(',') ?? null,
    selectedCategory: search.selectedCategory ?? null,
    page: search.page ? parseInt(search.page) : 1,
    sortField: search.sortKey ?? 'name',
    sortDirection: (search.sortOrder as 'ASC' | 'DESC') ?? 'ASC',
  });

  // Pre-load 3D modules on the server for Server 3D
  if (preloadedQuery.modules) {
    await loadServerModules(preloadedQuery.modules);
  }

  return <DirectoryClient preloadedQuery={preloadedQuery} />;
}

