import {
  ConcreteRequest,
  Environment,
  RequestParameters,
  Variables,
} from 'relay-runtime';

import {networkFetch} from './network';
import {loadQuery, PreloadedQuery} from 'react-relay';

export type ServerSideQuery = {
  params: RequestParameters;
  variables: Variables;
  response: any;
};

export async function fetchQuery(
  {params}: ConcreteRequest,
  variables: Variables,
): Promise<ServerSideQuery> {
  const response = await networkFetch(params.id, variables, params.text);
  return {params, variables, response};
}

export function buildQueryRefs(
  environment: Environment,
  serverQueries: {[key: string]: ServerSideQuery},
) {
  const queryRefs: {[key: string]: PreloadedQuery<any>} = {};
  for (const [queryKey, {params, variables, response}] of Object.entries(
    serverQueries,
  )) {
    if (params.id) {
      environment
        .getNetwork()
        // @ts-ignore Property 'responseCache' does not exist on type 'Network'
        .responseCache.set(params.id, variables, response);

      queryRefs[queryKey] = {
        kind: 'PreloadedQuery',
        environment,
        fetchPolicy: 'store-or-network',
        isDisposed: false,
        fetchKey: params.id,
        id: params.id,
        name: params.name,
        variables,
        dispose: () => {},
      };
    }
  }
  return queryRefs;
}
