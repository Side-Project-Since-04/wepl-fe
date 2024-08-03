'use client';

import Image from 'next/image';
import { TextBody2 } from '@ui/src/components/Text';
import { useSuspenseGetWeddingInfo } from '@/src/features/wedding/queries';
import BudgetRegister from '../../common/BudgetRegister';

export const BudgetAmount = () => {
  const { data: weddingInfo } = useSuspenseGetWeddingInfo();

  if (weddingInfo.totalBudget === null) {
    return <BudgetRegister />;
  }

  return (
    <div>
      <div className="text-gray-800 text-sub-title1">총 예산 금액 비용</div>
      <div className="mt-8 flex justify-between">
        <span className="text-gray-800 text-headline5">{weddingInfo.totalBudget.toLocaleString()}원</span>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <Image alt="작성" height={16} src="/budget/list/16-write.svg" width={16} />
        <TextBody2 className="text-gray-500">결혼 예산 리스트를 작성해볼까요?</TextBody2>
      </div>
    </div>
  );
};
