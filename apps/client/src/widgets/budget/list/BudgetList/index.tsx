'use client';

import Link from 'next/link';
import { useSuspenseGetClassifications } from '@/src/features/category/queries';
import { BudgetListItem } from '../BudgetListItem';

export const BudgetList = () => {
  const { data } = useSuspenseGetClassifications();

  return (
    <div className="flex flex-col gap-12">
      {data.content.map((classification, idx) => {
        const order = idx + 1;
        const path = classification.name.toLocaleLowerCase();

        return (
          <Link href={`/budget/list/${path}?order=${order}`} key={`budget-list-item-${path}`}>
            <BudgetListItem classification={classification} order={order} />
          </Link>
        );
      })}
    </div>
  );
};
