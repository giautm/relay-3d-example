import {
  Environment,
  QueryResponseCache,
  RecordSource,
  Store,
} from 'relay-runtime';

import moduleLoader from '@/lib/moduleLoader';
import {createNetwork} from './network';

const IS_SERVER = typeof window === typeof undefined;
const CLIENT_DEBUG = false;
const SERVER_DEBUG = false;

export function createEnvironment() {
  // Operation loader is responsible for loading JS modules/components
  // for data-processing and rendering
  const operationLoader = {
    get: (name: string) => moduleLoader(name).get(),
    load: (name: string) => moduleLoader(name).load(),
  };
  const cache = new QueryResponseCache({
    size: 100,
    ttl: 60 * 1000, // 1 minute in milliseconds
  });
  const env = new Environment({
    network: createNetwork(cache),
    store: new Store(new RecordSource(), {operationLoader}),
    operationLoader,
    isServer: IS_SERVER,
    log(event) {
      if ((IS_SERVER && SERVER_DEBUG) || (!IS_SERVER && CLIENT_DEBUG)) {
        console.debug('[relay environment event]', event);
      }
    },
  });
  // @ts-ignore Property 'responseCache' does not exist on type 'Network'
  env.getNetwork().responseCache = cache;
  return env;
}
