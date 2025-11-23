import React from 'react';
//@ts-ignore
import MatchContainer from 'react-relay/lib/relay-hooks/MatchContainer';
import {type MatchContainerProps} from 'react-relay';
import {
  matchLoader,
  resetError as resetModuleError,
  ModuleLoaderError,
} from '@/lib/moduleLoader';
import ErrorBoundary from '@/components/common/ErrorBoundary';
import {Button} from '@/components/common/LayoutComponents';

export default function RelayMatchContainer({
  match,
}: {
  match: MatchContainerProps['match'];
}) {
  return (
    <ErrorBoundary
      shouldCatchError={(error) => error instanceof ModuleLoaderError}
      renderError={(error: Error, resetError) => {
        let message = 'Unexpected error happen';
        let reset = () => resetError();
        if (error instanceof ModuleLoaderError) {
          message = `Failed to load ${error.moduleLoaderName}`;
          reset = () => {
            resetModuleError(error.moduleLoaderName);
            resetError();
          };
        }
        return (
          <div className="bg-red-200 rounded-md px-2 py-1 inline-block">
            {message}
            <Button size="small" onClick={reset}>
              Reload
            </Button>
          </div>
        );
      }}>
      <MatchContainer match={match} loader={matchLoader} />
    </ErrorBoundary>
  );
}
