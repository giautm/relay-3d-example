'use client';

import {ReactRelayContext} from 'react-relay';
import {Suspense, useMemo} from 'react';
import {createEnvironment} from '../lib/relay/environment';

export function RelayProvider({children}: {children: React.ReactNode}) {
  const value = useMemo(
    () => ({
      environment: createEnvironment(),
    }),
    [],
  );
  return (
    <ReactRelayContext.Provider value={value}>
      <Suspense fallback={null}>{children}</Suspense>
    </ReactRelayContext.Provider>
  );
}
