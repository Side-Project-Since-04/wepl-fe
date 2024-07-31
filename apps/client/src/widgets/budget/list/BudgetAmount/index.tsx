'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useSuspenseGetWeddingInfo } from '@/src/features/wedding/queries';
import BudgetRegister from '../../common/BudgetRegister';

export const BudgetAmount = () => {
  const { data } = useSuspenseGetWeddingInfo();

  if (data.totalBudget === null) {
    return <BudgetRegister />;
  }

  return (
    <div>
      <div className="text-gray-800 text-sub-title1">총 예산 금액 비용</div>
      <div className="mt-8 flex justify-between">
        <span className="text-gray-800 text-headline5">{data.totalBudget.toLocaleString()}원</span>
        <Link href="/budget/input">
          <button className="bg-gray-50 px-12 py-5 rounded-4 text-gray-600 text-button-sm" type="button">
            수정
          </button>
        </Link>
      </div>
      <div className="mt-6 flex gap-4">
        <Image alt="작성" height={16} src="/budget/list/icon-write.svg" width={16} />
        <span className="text-gray-500 text-body2">결혼 예산 리스트를 작성해볼까요?</span>
      </div>
    </div>
  );
};
