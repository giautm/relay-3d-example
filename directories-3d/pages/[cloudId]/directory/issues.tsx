import {Fragment} from 'react';
import {graphql, usePreloadedQuery} from 'react-relay';
import {PreloadedQuery} from 'react-relay';
import {GetServerSideProps} from 'next';
import Head from 'next/head';

import RelayMatchContainer from '../../../components/common/RelayMatchContainer';
import {Content} from '../../../components/common/LayoutComponents';
import Nav from '../../../components/common/Nav';
import {fetchQuery} from '../../../lib/relay/getServerSideProps';
import preLoadedQuery, {
  issuesPageQuery,
} from '../../../__generated__/issuesPageQuery.graphql';

interface DirectoryProps {
  queryRefs: {
    query: PreloadedQuery<issuesPageQuery>;
  };
  cloudId: string;
}

const query = graphql`
  query issuesPageQuery($cloudId: ID!, $id: ID!, $jql: String, $page: Int)
  @preloadable {
    jira {
      directory(
        cloudId: $cloudId
        id: $id
        filter: {
          criteria: [
            {
              id: "JiraDirectoryJqlBuilderAdvancedCriteria"
              type: JQL_BUILDER_ADVANCED
              value: $jql
            }
          ]
          page: $page
        }
      ) @match {
        ...JiraIssueDirectory_directory @module(name: "JiraIssueDirectory")
      }
    }
  }
`;

export default function Directory(props: DirectoryProps) {
  const {jira} = usePreloadedQuery<issuesPageQuery>(
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

export const getServerSideProps: GetServerSideProps = async (props) => ({
  props: {
    preloadedQueries: {
      query: await fetchQuery(preLoadedQuery, {
        cloudId: props.query.cloudId,
        id: 'issues',
        jql: props.query.jql ?? null,
        page: props.query.page ? parseInt(props.query.page.toString()) : 1,
      }),
    },
  },
});
