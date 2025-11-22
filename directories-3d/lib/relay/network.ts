import {
  CacheConfig,
  Network,
  QueryResponseCache,
  RequestParameters,
  Variables,
} from 'relay-runtime';

import {registerLoader} from '../moduleLoader';

export function registerModuleLoaders(modules: string[]) {
  modules.forEach((module) => {
    if (module.endsWith('$normalization.graphql')) {
      registerLoader(module, () => import(`../../__generated__/${module}`));
    } else {
      registerLoader(module, () => import(`../../components/3d/${module}`));
    }
  });
}

export async function networkFetch(
  id: string | null,
  variables: Variables,
  query: string | null,
) {
  const IS_SERVER = typeof window === typeof undefined;
  const url = IS_SERVER
    ? process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}/api/graphql`
      : (process.env.GRAPHQL_ENDPOINT ?? 'http://localhost:3000/api/graphql')
    : `${window.location.origin}/api/graphql`;
  const body = query
    ? JSON.stringify({query, variables})
    : JSON.stringify({
        variables,
        extensions: {persistedQuery: {version: 1, sha256Hash: id}},
      });
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body,
  });
  return response.json();
}

export function createNetwork(cache: QueryResponseCache) {
  async function fetchResponse(
    params: RequestParameters,
    variables: Variables,
    cacheConfig: CacheConfig,
  ) {
    const {id, text, operationKind} = params;
    if (id != null && operationKind === 'query' && !cacheConfig.force) {
      const fromCache = cache.get(id, variables);
      if (fromCache != null) {
        return Promise.resolve(fromCache);
      }
    }
    return networkFetch(id, variables, text);
  }
  const network = Network.create(async (params, variables, cacheConfig) => {
    const response = await fetchResponse(params, variables, cacheConfig);
    if (Array.isArray(response.extensions?.modules)) {
      registerModuleLoaders(response.extensions.modules);
    }
    return response;
  });
  return network;
}
