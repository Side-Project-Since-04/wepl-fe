import { Skeleton } from '@ui/src/Skeleton';
import { Divider } from '@/src/shared/components/Divider';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import { TotalBudgetAndSpending } from './_components/TotalBudgetAndSpending';
import { DetailClassifications } from './_components/DetailClassifications';

const SpendingPage = () => {
  return (
    <main>
      <section className="pt-32 px-20 pb-40 flex flex-col between-center">
        <AsyncBoundary SuspenseFallback={<Skeleton className="h-[212px]" />}>
          <TotalBudgetAndSpending />
        </AsyncBoundary>
      </section>
      <Divider />
      <section className="py-40 px-20">
        <div>
          <h4 className="text-headline4 text-gray-900">상세 지출 리스트</h4>
          <p className="mt-4 text-body1 text-gray-500">카테고리별 지출이 포함되어 있습니다</p>
        </div>
        <AsyncBoundary SuspenseFallback={<Skeleton className="h-[612px] mt-44" />}>
          <DetailClassifications />
        </AsyncBoundary>
      </section>
    </main>
  );
};

export default SpendingPage;
