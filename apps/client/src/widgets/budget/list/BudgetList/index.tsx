'use client';

import React from 'react';
import BudgetListItem from '../BudgetListItem';
import Link from 'next/link';
import { useSuspenseQueries } from '@tanstack/react-query';
import { getClassifications } from '@/src/shared/api/category';
import { getBudget } from '@/src/shared/api/budget';
import { queries } from '@/src/features/common/queries';

export default function BudgetList() {
  const result = useSuspenseQueries({
    queries: [
      {
        queryKey: [queries.budget.getBudget],
        queryFn: getBudget,
      },
      {
        queryKey: [queries.classification.getClassifications],
        queryFn: getClassifications,
      },
    ],
  });

  const budgets = result[0].data;
  const classifications = result[1].data;

  return (
    <div className="flex flex-col gap-12">
      {classifications.content.map(({ name, guide }, idx) => {
        const order = idx + 1;
        const path = name.toLocaleLowerCase();
        const budget = budgets.filter((budget) => budget.classificationName === name)[0].amount;

        return (
          <Link key={`budget-list-item-${path}`} href={`/budget/list/${path}?order=${order}`}>
            <BudgetListItem classification={{ name, guide }} order={order} budget={budget} />
          </Link>
        );
      })}
    </div>
  );
}
