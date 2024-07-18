'use client';

import BudgetList from '@/src/widgets/budget/list/BudgetList';
import BackHeader from '@/src/shared/components/BackHeader';
import { BudgetAmount } from '@/src/widgets/budget/list/BudgetAmount';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import PageLayout from '@/src/pages/PageLayout';

export default function BudgetListPage() {
  return (
    <PageLayout isPadding>
      <BackHeader />
      <section className="py-16">
        <AsyncBoundary>
          <BudgetAmount />
        </AsyncBoundary>
      </section>
      <section>
        <div className="py-16 text-gray-800 text-sub-title1">결혼 예산 리스트</div>
        <AsyncBoundary>
          <BudgetList />
        </AsyncBoundary>
      </section>
    </PageLayout>
  );
}
