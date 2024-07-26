import { cn } from '@ui/lib/utils';
import { Skeleton } from '@ui/src/Skeleton';
import { BudgetList } from '@/src/widgets/budget/list/BudgetList';
import BackHeader from '@/src/shared/components/BackHeader';
import { BudgetAmount } from '@/src/widgets/budget/list/BudgetAmount';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import PageLayout from '@/src/pages/PageLayout';
import { classNames } from '@/src/shared/ui/utils';

const BudgetListPage = () => {
  return (
    <PageLayout>
      <BackHeader />
      <section className={classNames.pagePadding}>
        <section className="py-16">
          <AsyncBoundary SuspenseFallback={<Skeleton className="h-[88px]" />}>
            <BudgetAmount />
          </AsyncBoundary>
        </section>
        <section>
          <div className={cn('py-16 text-gray-800 text-sub-title1')}>결혼 예산 리스트</div>
          <AsyncBoundary SuspenseFallback={<Skeleton className="h-[244px]" />}>
            <BudgetList />
          </AsyncBoundary>
        </section>
      </section>
    </PageLayout>
  );
};

export default BudgetListPage;
