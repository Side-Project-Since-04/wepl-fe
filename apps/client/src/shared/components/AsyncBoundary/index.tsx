'use client';

import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense, SuspenseProps } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useMounted } from '@fsd/shared/hooks/useMounted';

interface AsyncBoundaryProps {
  ErrorFallback?: ({ reset }: { reset: () => void }) => React.ReactNode;
  SuspenseFallback?: React.ReactNode;
  children: React.ReactNode;
}

function DefaultSuspenseFallback() {
  return <div>Loading...</div>;
}

function DefaultErrorFallback({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div>
      <p>에러가 발생했습니다!</p>
      <p>
        <button onClick={reset}>재시도</button>
      </p>
    </div>
  );
}

function CustomSuspense({ fallback, children }: SuspenseProps) {
  const isMounted = useMounted();

  if (!isMounted) {
    return fallback;
  }

  return <Suspense fallback={fallback}>{children}</Suspense>;
}

function AsyncBoundary({ ErrorFallback, SuspenseFallback, children }: AsyncBoundaryProps) {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ error, resetErrorBoundary }) => {
            if (ErrorFallback) {
              return <ErrorFallback reset={resetErrorBoundary} />;
            }

            return <DefaultErrorFallback error={error} reset={resetErrorBoundary} />;
          }}
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
