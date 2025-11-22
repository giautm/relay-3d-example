'use client';

import {Fragment, useEffect, useState} from 'react';
import {graphql, usePreloadedQuery, useQueryLoader} from 'react-relay';
import {useParams, useSearchParams} from 'next/navigation';

import RelayMatchContainer from '../../../../components/common/RelayMatchContainer';
import {Content} from '../../../../components/common/LayoutComponents';
import Nav from '../../../../components/common/Nav';
import preLoadedQuery, {
  issuesPageQuery,
} from '../../../../__generated__/issuesPageQuery.graphql';

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

function DirectoryContent({queryRef, cloudId}: {queryRef: any; cloudId: string}) {
  const {jira} = usePreloadedQuery<issuesPageQuery>(
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
  const [queryRef, loadQuery] = useQueryLoader<issuesPageQuery>(
    preLoadedQuery,
  );

  useEffect(() => {
    const cloudId = params.cloudId as string;
    const jql = searchParams.get('jql');
    const page = searchParams.get('page');

    loadQuery({
      cloudId,
      id: 'issues',
      jql: jql ?? null,
      page: page ? parseInt(page) : 1,
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
