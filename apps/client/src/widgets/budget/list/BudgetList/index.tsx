import { CLASSIFICATION } from '@/src/shared/constants/classification';
import React from 'react';
import BudgetListItem from '../BudgetListItem';
import Link from 'next/link';

export default function BudgetList() {
  // TODO
  const budget = 0;

  return (
    <div className="flex flex-col gap-12">
      {CLASSIFICATION.map(({ type, name }, idx) => {
        const order = idx + 1;

        return (
          <Link href={`/budget/list/${type.toLocaleLowerCase()}?order=${order}`}>
            <BudgetListItem
              key={`budget-list-item-${type}`}
              classification={{ type, name }}
              order={order}
              budget={budget}
            />
          </Link>
        );
      })}
    </div>
  );
}
