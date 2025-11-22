import {
  ConcreteRequest,
  Environment,
  RequestParameters,
  Variables,
} from 'relay-runtime';

import {networkFetch, registerModuleLoaders} from './network';
import {loadQuery, PreloadedQuery} from 'react-relay';

export type ServerSideQuery = {
  params: RequestParameters;
  variables: Variables;
  response: any;
  modules?: string[];
};

export async function fetchQuery(
  {params}: ConcreteRequest,
  variables: Variables,
): Promise<ServerSideQuery> {
  const response = await networkFetch(params.id, variables, params.text);
  const modules = response.extensions?.modules || [];
  return {params, variables, response, modules};
}

export function buildQueryRefs(
  environment: Environment,
  serverQueries: {[key: string]: ServerSideQuery},
) {
  const queryRefs: {[key: string]: PreloadedQuery<any>} = {};
  for (const [queryKey, {params, variables, response, modules}] of Object.entries(
    serverQueries,
  )) {
    if (params.id) {
      const network = environment.getNetwork();
      // @ts-ignore Property 'responseCache' does not exist on type 'Network'
      network.responseCache.set(params.id, variables, response);

      // Register modules that were loaded on the server for client-side hydration
      // Since we're bypassing the network fetch by setting cache directly,
      // we need to manually trigger module registration
      if (modules && modules.length > 0 && typeof window !== 'undefined') {
        registerModuleLoaders(modules);
      }

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
