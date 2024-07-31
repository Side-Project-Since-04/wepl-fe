// app/layout.tsx
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { WEDDING_MAIN_CATEGORIES } from '@/src/shared/constants';
import { redirect } from 'next/navigation';
import LoadingAnimation from '@/src/shared/components/Loading';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
export default function Layout({
  params,
  children,
}: {
  params: { classification: string };
  children: React.ReactNode;
}) {
  const categoryName = WEDDING_MAIN_CATEGORIES[params.classification as keyof typeof WEDDING_MAIN_CATEGORIES] || null;

  if (!categoryName) redirect('/home');

  return (
    <>
      <AsyncBoundary SuspenseFallback={<LoadingAnimation />}>{children}</AsyncBoundary>
    </>
  );
}
