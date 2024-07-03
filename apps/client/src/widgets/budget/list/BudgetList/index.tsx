'use client';

import React, { Suspense } from 'react';
import BudgetListItem from '../BudgetListItem';
import Link from 'next/link';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { getClassifications } from '@/src/shared/api/category';
import { ErrorBoundary } from 'react-error-boundary';

export default function BudgetList() {
  return (
    <ErrorBoundary fallback={<div>에러...</div>}>
      <Suspense fallback={<div>Loading...</div>}>
        <FetchData />
        hi
      </Suspense>
    </ErrorBoundary>
  );
}

function FetchData() {
  const { data } = useSuspenseQuery({
    // const { data } = useQuery({
    queryKey: ['/getClassifications'],
    queryFn: getClassifications,
    retry: 1,
    retryDelay: 5000,
  });

  const budget = 0;

  return (
    <div className="flex flex-col gap-12">
      {data?.content.map(({ name, guide }, idx) => {
        const order = idx + 1;
        const path = name.toLocaleLowerCase();

        return (
          <Link key={`budget-list-item-${path}`} href={`/budget/list/${path}?order=${order}`}>
            <BudgetListItem classification={{ name, guide }} order={order} budget={budget} />
          </Link>
        );
      })}
    </div>
  );
}
