'use client';

import { HeadLine3 } from '@ui/src/components/HeadLine';
import { SubTitle2, TextBody2 } from '@ui/src/components/Text';
import { useSuspenseGetWeddingInfo } from '@/src/features/wedding/queries';

export const BudgetTotalAmount = () => {
  const { data: weddingInfo } = useSuspenseGetWeddingInfo();

  return (
    <div>
      <div className="text-center">
        <SubTitle2>총 결혼 예산</SubTitle2>
        <HeadLine3 className="text-gray-400">{weddingInfo.totalBudget?.toLocaleString() || 0}원</HeadLine3>
        <TextBody2 className="mt-8 text-gray-500">
          세부 예산을 작성하고
          <br />
          계획적인 결혼 준비를 할 수 있어요.
        </TextBody2>
      </div>
    </div>
  );
};
