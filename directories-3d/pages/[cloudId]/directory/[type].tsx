import {Fragment} from 'react';
import {graphql, GraphQLTaggedNode, usePreloadedQuery} from 'react-relay';
import {PreloadedQuery} from 'react-relay';
import {GetServerSideProps} from 'next';
import Head from 'next/head';

import {fetchQuery} from '../../../lib/relay/getServerSideProps';
import RelayMatchContainer from '../../../components/common/RelayMatchContainer';
import {Content} from '../../../components/common/LayoutComponents';
import Nav from '../../../components/common/Nav';
import preLoadedQuery, {
  TypeBasedDirectoryPageQuery,
} from '../../../__generated__/TypeBasedDirectoryPageQuery.graphql';
import {ConcreteRequest} from 'relay-runtime';

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

interface DirectoryProps {
  queryRefs: {
    query: PreloadedQuery<TypeBasedDirectoryPageQuery>;
  };
  cloudId: string;
}

export default function Directory(props: DirectoryProps) {
  const {jira} = usePreloadedQuery<TypeBasedDirectoryPageQuery>(
    query,
    props.queryRefs.query,
  );
  return (
    <Fragment>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta name="cloudId" content={props.cloudId} />
      </Head>
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

export const getServerSideProps: GetServerSideProps = async ({query}) => ({
  props: {
    preloadedQueries: {
      query: await fetchQuery(preLoadedQuery, {
        cloudId: query.cloudId,
        id: query.type,
        searchText: query.contains ?? null,
        selectedTypes: query.selectedProjectType?.toString().split(',') ?? null,
        selectedCategory: query.selectedCategory ?? null,
        page: query.page ? parseInt(query.page.toString()) : 1,
        sortField: query.sortKey ?? 'name',
        sortDirection: query.sortOrder ?? 'ASC',
      }),
    },
  },
});
