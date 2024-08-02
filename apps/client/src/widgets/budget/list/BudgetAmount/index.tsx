'use client';

import Link from 'next/link';
import Image from 'next/image';
import { TextBody2 } from '@ui/src/components/Text';
import { useSuspenseGetWeddingInfo } from '@/src/features/wedding/queries';
import { useSuspenseGetClassifications } from '@/src/features/category/queries';
import BudgetRegister from '../../common/BudgetRegister';

export const BudgetAmount = () => {
  const { data: weddingInfo } = useSuspenseGetWeddingInfo();
  const { data: classifications } = useSuspenseGetClassifications();

  if (weddingInfo.totalBudget === null) {
    return <BudgetRegister />;
  }

  const classificationsBudget = classifications.content.reduce((acc, c) => acc + c.budget, 0);
  const diff = weddingInfo.totalBudget - classificationsBudget;

  return (
    <div>
      <div className="text-gray-800 text-sub-title1">총 예산 금액 비용</div>
      <div className="mt-8 flex justify-between">
        <span className="text-gray-800 text-headline5">{weddingInfo.totalBudget.toLocaleString()}원</span>
        <Link href="/budget/input">
          <button className="bg-gray-50 px-12 py-5 rounded-4 text-gray-600 text-button-sm" type="button">
            수정
          </button>
        </Link>
      </div>

      {/**
       * 총예산, 총지출 조건에 따라 UI를 다르게 보여줌
       **/}
      <div className="mt-6 flex items-center gap-4">
        {classificationsBudget === 0 && (
          <>
            <Image alt="작성" height={16} src="/budget/list/16-write.svg" width={16} />
            <TextBody2 className="text-gray-500">결혼 예산 리스트를 작성해볼까요?</TextBody2>
          </>
        )}
        {classificationsBudget > 0 && diff < 0 && (
          <>
            <Image alt="작성" height={16} src="/budget/list/16-minus.png" width={16} />
            <TextBody2 className="text-auxiliary-blue">예산대비 {diff.toLocaleString()}원</TextBody2>
          </>
        )}
        {classificationsBudget > 0 && diff > 0 && (
          <>
            <Image alt="작성" height={16} src="/budget/list/16-plus.png" width={16} />
            <TextBody2 className="text-auxiliary-red">예산대비 {diff.toLocaleString()}원</TextBody2>
          </>
        )}
      </div>
    </div>
  );
};
