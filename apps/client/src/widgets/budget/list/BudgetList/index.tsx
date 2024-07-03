'use client';

import React from 'react';
import BudgetListItem from '../BudgetListItem';
import Link from 'next/link';
import { useSuspenseQuery } from '@tanstack/react-query';
import { getClassifications } from '@/src/shared/api/category';
import { queryKeys } from '@/src/shared/constants/queryKeys';

export default function BudgetList() {
  const { data } = useSuspenseQuery({
    queryKey: [queryKeys.getClassifications],
    queryFn: getClassifications,
    refetchInterval: false,
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
