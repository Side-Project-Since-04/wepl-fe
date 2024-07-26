import Divider from '@/src/shared/components/Divider';
import { TotalBudgetAndSpending } from './components/TotalBudgetAndSpending';
import DetailSpendingList from './components/DetailSpendingList';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';

const SpendingPage = () => {
  return (
    <main>
      <section className="pt-32 px-20 pb-40">
        <AsyncBoundary SuspenseFallback={<div>지출 로딩..</div>}>
          <TotalBudgetAndSpending />
        </AsyncBoundary>
      </section>
      <Divider />
      <section className="py-40 px-20">
        <div>
          <h4 className="text-headline4 text-gray-900">상세 지출 리스트</h4>
          <p className="mt-4 text-body1 text-gray-500">카테고리별 지출이 포함되어 있습니다</p>
        </div>
        <AsyncBoundary SuspenseFallback={<div>디테일 로딩...</div>}>
          <DetailSpendingList />
        </AsyncBoundary>
      </section>
    </main>
  );
};

export default SpendingPage;
