import BudgetList from '@/src/widgets/budget/list/BudgetList';
import BackHeader from '@/src/shared/components/BackHeader';
import { BudgetAmount } from '@/src/widgets/budget/list/BudgetAmount';
import { ErrorBoundary } from 'react-error-boundary';
import { Suspense } from 'react';

export default function BudgetListPage() {
  return (
    <main>
      <BackHeader />
      <section className="py-16">
        <ErrorBoundary fallback={<div>에러...</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <BudgetAmount />
          </Suspense>
        </ErrorBoundary>
      </section>
      <section>
        <div className="py-16 text-gray-800 text-sub-title1">결혼 예산 리스트</div>
        <ErrorBoundary fallback={<div>에러...</div>}>
          <Suspense fallback={<div>Loading...</div>}>
            <BudgetList />
          </Suspense>
        </ErrorBoundary>
      </section>
    </main>
  );
}
