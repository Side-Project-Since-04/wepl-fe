'use client';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import type { SuspenseProps } from 'react';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useMounted } from '@fsd/shared/hooks/useMounted';

interface AsyncBoundaryProps {
  ErrorFallback?: ({ reset }: { reset: () => void }) => React.ReactNode;
  SuspenseFallback?: React.ReactNode;
  children: React.ReactNode;
}

const DefaultSuspenseFallback = () => {
  return <div>Loading...</div>;
}

const DefaultErrorFallback = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div>
      <p>에러가 발생했습니다!</p>
      <p>
        <button onClick={reset}>재시도</button>
        <div>{error.message}</div>
      </p>
    </div>
  );
}

const CustomSuspense = ({ fallback, children }: SuspenseProps) => {
  const isMounted = useMounted();

  if (!isMounted) {
    return fallback;
  }

  return <Suspense fallback={fallback}>{children}</Suspense>;
}



const renderFallback = ({ErrorFallback , error, resetErrorBoundary }: {ErrorFallback?: ({ reset }: { reset: () => void }) => React.ReactNode, error: Error, resetErrorBoundary: () => void})=> {
  if (ErrorFallback) {
    return <ErrorFallback reset={resetErrorBoundary} />;
  }
  return <DefaultErrorFallback error={error} reset={resetErrorBoundary} />;
};



const AsyncBoundary = ({ ErrorFallback, SuspenseFallback, children }: AsyncBoundaryProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          fallbackRender={({ error, resetErrorBoundary }: { error: Error; resetErrorBoundary: () => void }) => {
            return renderFallback({ErrorFallback, error, resetErrorBoundary })
          }}
          onReset={reset}
        >
          <CustomSuspense fallback={SuspenseFallback ? SuspenseFallback : <DefaultSuspenseFallback />}>
            {children}
          </CustomSuspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default AsyncBoundary;
