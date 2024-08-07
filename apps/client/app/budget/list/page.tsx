import { cn } from '@ui/lib/utils';
import { Skeleton } from '@ui/src/Skeleton';
import { BudgetList } from '@/src/widgets/budget/list/BudgetList';
import BackHeader from '@/src/shared/components/BackHeader';
import { BudgetTotalAmount } from '@/src/widgets/budget/list/BudgetTotalAmount';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import PageLayout from '@/src/pages/PageLayout';
import { classNames } from '@/src/shared/ui/utils';
import { Divider } from '@/src/shared/components/Divider';

const BudgetListPage = () => {
  return (
    <PageLayout>
      <BackHeader className="border-b-[1px] border-gray-100" />
      <section className={`py-30 ${classNames.pagePadding}`}>
        <AsyncBoundary SuspenseFallback={<Skeleton className="h-[88px]" />}>
          <BudgetTotalAmount />
        </AsyncBoundary>
      </section>
      <Divider />
      <section className={`py-30 ${classNames.pagePadding}`}>
        <div className={cn('py-16 text-gray-800 text-sub-title1')}>결혼 예산 리스트</div>
        <AsyncBoundary SuspenseFallback={<Skeleton className="h-[244px]" />}>
          <BudgetList />
        </AsyncBoundary>
      </section>
    </PageLayout>
  );
};

export default BudgetListPage;
