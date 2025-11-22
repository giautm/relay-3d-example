'use client';

import {Fragment, useEffect, useState} from 'react';
import {graphql, usePreloadedQuery, useQueryLoader} from 'react-relay';
import {useParams, useSearchParams} from 'next/navigation';

import RelayMatchContainer from '../../../../components/common/RelayMatchContainer';
import {Content} from '../../../../components/common/LayoutComponents';
import Nav from '../../../../components/common/Nav';
import preLoadedQuery, {
  TypeBasedDirectoryPageQuery,
} from '../../../../__generated__/TypeBasedDirectoryPageQuery.graphql';

const query = graphql`
  query TypeBasedDirectoryPageQuery(
    $cloudId: ID!
    $id: ID!
    $searchText: String
    $selectedTypes: [String!]
    $selectedCategory: String
    $page: Int
    $sortField: String
    $sortDirection: SortDirection
  ) @preloadable {
    jira {
      directory(
        cloudId: $cloudId
        id: $id
        filter: {
          criteria: [
            {
              id: "JiraDirectorySearchTextFilterCriteria"
              type: KEYWORD
              value: $searchText
            }
            {
              id: "JiraGenericDirectoryProjectTypesFilterCriteria"
              type: MULTISELECT
              values: $selectedTypes
            }
            {
              id: "JiraGenericDirectoryProjectCategoriesFilterCriteria"
              type: SELECT
              value: $selectedCategory
            }
          ]
          page: $page
          sortField: $sortField
          sortDirection: $sortDirection
        }
      ) @match {
        ...JiraGenericDirectory_directory @module(name: "JiraGenericDirectory")
      }
    }
  }
`;

function DirectoryContent({queryRef, cloudId}: {queryRef: any; cloudId: string}) {
  const {jira} = usePreloadedQuery<TypeBasedDirectoryPageQuery>(
    query,
    queryRef,
  );
  return (
    <Fragment>
      <Nav />
      <Content>
        {jira ? (
          <RelayMatchContainer match={jira.directory} />
        ) : (
          <p>Directory not found.</p>
        )}
      </Content>
    </Fragment>
  );
}

export default function Directory() {
  const params = useParams();
  const searchParams = useSearchParams();
  const [queryRef, loadQuery] = useQueryLoader<TypeBasedDirectoryPageQuery>(
    preLoadedQuery,
  );

  useEffect(() => {
    const cloudId = params.cloudId as string;
    const type = params.type as string;
    const contains = searchParams.get('contains');
    const selectedProjectType = searchParams.get('selectedProjectType');
    const selectedCategory = searchParams.get('selectedCategory');
    const page = searchParams.get('page');
    const sortKey = searchParams.get('sortKey');
    const sortOrder = searchParams.get('sortOrder');

    loadQuery({
      cloudId,
      id: type,
      searchText: contains ?? null,
      selectedTypes: selectedProjectType?.split(',') ?? null,
      selectedCategory: selectedCategory ?? null,
      page: page ? parseInt(page) : 1,
      sortField: sortKey ?? 'name',
      sortDirection: (sortOrder as 'ASC' | 'DESC') ?? 'ASC',
    });
  }, [params, searchParams, loadQuery]);

  if (!queryRef) {
    return (
      <>
        <Nav />
        <Content>
          <p>Loading...</p>
        </Content>
      </>
    );
  }

  return <DirectoryContent queryRef={queryRef} cloudId={params.cloudId as string} />;
}
