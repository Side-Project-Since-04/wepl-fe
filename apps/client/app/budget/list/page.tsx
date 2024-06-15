import iconWriteSvg from '@/public/budget/list/icon-write.svg';
import BudgetList from '@/src/widgets/budget/list/BudgetList';
import BackHeader from '@/src/shared/components/BackHeader';
import Link from 'next/link';

/**
 * TODO
 *
 * 서버 State : 총 예산 금액, 대분류 예산 금액
 *
 */
export default function BudgetListPage() {
  const allBudget = 8000000;

  return (
    <main>
      <BackHeader />
      <section className="py-16">
        <div className="text-gray-800 text-sub-title1">총 예산 금액 비용</div>
        <div className="mt-8 flex justify-between">
          <span className="text-gray-800 text-headline5">{Number(allBudget).toLocaleString()}원</span>
          <Link href={'/budget/input'}>
            <button className="bg-gray-50 px-12 py-5 rounded-4 text-gray-600 text-button-sm">수정</button>
          </Link>
        </div>
        <div className="mt-6 flex gap-4">
          <img src={iconWriteSvg.src} alt="작성" />
          <span className="text-gray-500 text-body2">결혼 예산 리스트를 작성해볼까요?</span>
        </div>
      </section>
      <section>
        <div className="py-16 text-gray-800 text-sub-title1">결혼 예산 리스트</div>
        <BudgetList />
      </section>
    </main>
  );
}
