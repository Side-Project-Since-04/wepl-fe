// app/layout.tsx
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { WEDDING_MAIN_CATEGORIES } from '@/src/shared/constants';
import { redirect } from 'next/navigation';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import LoadingAnimation from '@/src/shared/components/Loading';
export default function Layout({
  params,
  children,
}: {
  params: { classificationName: string };
  children: React.ReactNode;
}) {
  const categoryName =
    WEDDING_MAIN_CATEGORIES[params.classificationName.toUpperCase() as keyof typeof WEDDING_MAIN_CATEGORIES] || null;
  if (!categoryName) redirect('/home');

  return (
    <>
      <AsyncBoundary SuspenseFallback={<LoadingAnimation />}>{children}</AsyncBoundary>
    </>
  );
}
