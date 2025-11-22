'use client';

import {Fragment, useMemo, useEffect} from 'react';
import {graphql, usePreloadedQuery, useRelayEnvironment} from 'react-relay';

import RelayMatchContainer from '../../../../components/common/RelayMatchContainer';
import {Content} from '../../../../components/common/LayoutComponents';
import Nav from '../../../../components/common/Nav';
import {issuesPageQuery} from '../../../../__generated__/issuesPageQuery.graphql';
import {buildQueryRefs, ServerSideQuery} from '../../../../lib/relay/getServerSideProps';
import {registerClientModules} from '../../../../lib/clientModuleRegistration';

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

export default function IssuesClient({
  preloadedQuery,
}: {
  preloadedQuery: ServerSideQuery;
}) {
  const environment = useRelayEnvironment();

  // Register modules from server response before hydration
  useEffect(() => {
    if (preloadedQuery.modules) {
      registerClientModules(preloadedQuery.modules);
    }
  }, [preloadedQuery.modules]);

  const queryRef = useMemo(() => {
    const queryRefs = buildQueryRefs(environment, {query: preloadedQuery});
    return queryRefs.query;
  }, [environment, preloadedQuery]);

  const {jira} = usePreloadedQuery<issuesPageQuery>(query, queryRef);

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
