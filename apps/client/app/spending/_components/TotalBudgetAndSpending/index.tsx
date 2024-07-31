'use client';

import { cn } from '@ui/lib/utils';
import Link from 'next/link';
import { WeplButton } from '@/src/shared/components/Button/WeplButton';
import { useSuspenseGetWeddingInfo } from '@/src/features/wedding/queries';
import BudgetRegister from '@/src/widgets/budget/common/BudgetRegister';

export const TotalBudgetAndSpending = () => {
  const { data } = useSuspenseGetWeddingInfo();
  const { totalBudget, totalSpending, spendingPerBudget } = data;
  const percentClassName = `w-[${spendingPerBudget}%]`;

  if (totalBudget === null || spendingPerBudget === null) {
    return <BudgetRegister className="w-full" />;
  }

  return (
    <div>
      <div className="text-center">
        <div>
          <p className="text-body1 text-gray-500">$홍길동$님의 지출 현황</p>
          <h4 className="text-headline4 text-gray-900">
            총 예산 대비 지출 <span className="text-primary-400">{spendingPerBudget}%</span>
          </h4>
        </div>

        <div className="mt-16 px-20">
          <ProgressBar percent={percentClassName} />
        </div>

        <div className="mt-16 text-gray-700 text-body2">
          <div className="flex justify-center items-center gap-8">
            <span>
              <span className="inline-block rounded-[50%] bg-gray-100 w-8 h-8" />
              <span className="ml-8">총 예산 금액</span>
            </span>
            <span className="basis-100 text-right">{totalBudget.toLocaleString()}원</span>
          </div>
          <div className="flex justify-center items-center gap-8">
            <span>
              <span className="inline-block rounded-[50%] bg-primary-400 w-8 h-8" />
              <span className="ml-8">총 지출 금액</span>
            </span>
            <span className="basis-100 text-right">{totalSpending.toLocaleString()}원</span>
          </div>
        </div>
      </div>

      <div className="pt-32 flex justify-center">
        <Link href="/spending/collect">
          <WeplButton className="h-40 text-button-md" size="sm">
            지출 모아보기
          </WeplButton>
        </Link>
      </div>
    </div>
  );
};

const ProgressBar = ({ percent }: { percent: string }) => {
  return (
    <div className="relative bg-gray-100 h-12 rounded-100">
      <div className={cn('absolute left-0 top-0 bg-primary-400 h-12 rounded-100', percent)} />
    </div>
  );
};
