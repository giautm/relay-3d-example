'use client';

import {Fragment, useMemo} from 'react';
import {graphql, usePreloadedQuery, useRelayEnvironment} from 'react-relay';

import RelayMatchContainer from '../../../../components/common/RelayMatchContainer';
import {Content} from '../../../../components/common/LayoutComponents';
import Nav from '../../../../components/common/Nav';
import {
  TypeBasedDirectoryPageQuery,
} from '../../../../__generated__/TypeBasedDirectoryPageQuery.graphql';
import {buildQueryRefs, ServerSideQuery} from '../../../../lib/relay/getServerSideProps';

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

export default function DirectoryClient({
  preloadedQuery,
}: {
  preloadedQuery: ServerSideQuery;
}) {
  const environment = useRelayEnvironment();

  const queryRef = useMemo(() => {
    const queryRefs = buildQueryRefs(environment, {query: preloadedQuery});
    return queryRefs.query;
  }, [environment, preloadedQuery]);

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
