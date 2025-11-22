import {ReactRelayContext, useRelayEnvironment} from 'react-relay';
import {Suspense, useMemo} from 'react';
import {NextComponentType, NextPageContext} from 'next';

import {createEnvironment} from './environment';
import {ServerSideQuery, buildQueryRefs} from './getServerSideProps';

interface ComponentProps {
  Component: NextComponentType<NextPageContext, any, any>;
  props: {
    preloadedQueries: {
      [key: string]: ServerSideQuery;
    };
  };
}

function Hydrate({Component, props}: ComponentProps) {
  const environment = useRelayEnvironment();
  const transformedProps = useMemo(() => {
    if (props == null || props.preloadedQueries == null) {
      return props;
    }
    const {preloadedQueries, ...restProps} = props;
    return {
      ...restProps,
      queryRefs: buildQueryRefs(environment, preloadedQueries),
    };
  }, [props, environment]);
  return <Component {...transformedProps} />;
}

export function ReactRelayContainer({Component, props}: ComponentProps) {
  const value = useMemo(
    () => ({
      environment: createEnvironment(),
    }),
    [],
  );
  return (
    <ReactRelayContext.Provider value={value}>
      <Suspense fallback={null}>
        <Hydrate Component={Component} props={props} />
      </Suspense>
    </ReactRelayContext.Provider>
  );
}
