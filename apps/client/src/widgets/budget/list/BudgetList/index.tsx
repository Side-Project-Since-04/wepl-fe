'use client';

import React from 'react';
import BudgetListItem from '../BudgetListItem';
import Link from 'next/link';
import { useSuspenseQueries } from '@tanstack/react-query';
import { queries } from '@/src/features/common/queries';

export default function BudgetList() {
  const [{ data: budgets }, { data: classifications }] = useSuspenseQueries({
    queries: [queries.budget.getBudget(), queries.category.getClassifications()],
  });

  return (
    <div className="flex flex-col gap-12">
      {classifications?.content?.map(({ name, guide }, idx) => {
        const order = idx + 1;
        const path = name.toLocaleLowerCase();
        const budget = budgets?.filter((budget) => budget.classificationName === name)[0].amount;

        return (
          <Link key={`budget-list-item-${path}`} href={`/budget/list/${path}?order=${order}`}>
            <BudgetListItem classification={{ name, guide }} order={order} budget={budget} />
          </Link>
        );
      })}
    </div>
  );
}
