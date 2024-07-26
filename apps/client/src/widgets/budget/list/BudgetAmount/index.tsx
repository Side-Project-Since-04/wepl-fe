'use client';

import iconWriteSvg from '@/public/budget/list/icon-write.svg?url';
import { useSuspenseGetWeddingInfo } from '@/src/features/wedding/queries';
import Link from 'next/link';

export function BudgetAmount() {
  const { data } = useSuspenseGetWeddingInfo();

  return (
    <div>
      <div className="text-gray-800 text-sub-title1">총 예산 금액 비용</div>
      <div className="mt-8 flex justify-between">
        <span className="text-gray-800 text-headline5">{Number(data.totalBudget).toLocaleString()}원</span>
        <Link href={'/budget/input'}>
          <button className="bg-gray-50 px-12 py-5 rounded-4 text-gray-600 text-button-sm">수정</button>
        </Link>
      </div>
      <div className="mt-6 flex gap-4">
        <img src={iconWriteSvg.src} alt="작성" />
        <span className="text-gray-500 text-body2">결혼 예산 리스트를 작성해볼까요?</span>
      </div>
    </div>
  );
}
