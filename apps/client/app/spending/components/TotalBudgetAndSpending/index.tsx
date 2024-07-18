import { cn } from '@ui/lib/utils';
import { Button2 } from '@ui/src/Button2';
import Link from 'next/link';

export function TotalBudgetAndSpending() {
  return (
    <div>
      <div className="text-center">
        {/* text */}
        <div>
          <p className="text-body1 text-gray-500">$홍길동$님의 지출 현황</p>
          <h4 className="text-headline4 text-gray-900">
            총 예산 대비 지출 <span className="text-primary-400">27%</span>
          </h4>
        </div>
        {/* Progress bar */}
        <div className="mt-16 px-20">
          <ProgressBar percent={`w-${20}`} />
        </div>
        {/* 예산금액, 총지출금액 */}
        <div className="mt-16 text-gray-700 text-body2">
          <div className="flex justify-center items-center gap-8">
            <span className="inline-block rounded-[50%] bg-gray-100 w-8 h-8" />
            <span>총 예산 금액</span>
            <span>80,000,000원</span>
          </div>
          <div className="flex justify-center items-center gap-8">
            <span className="inline-block rounded-[50%] bg-primary-400 w-8 h-8" />
            <span>총 지출 금액</span>
            <span>20,000,000원</span>
          </div>
        </div>
      </div>
      <div className="pt-32 flex justify-center">
        <Link href="/spending/collect">
          <Button2 className="h-40 text-button-md" size="sm">
            지출 모아보기
          </Button2>
        </Link>
      </div>
    </div>
  );
}

function ProgressBar({ percent }: any) {
  return (
    <div className="relative bg-gray-100 h-12 rounded-100">
      <div className={cn('absolute left-0 top-0 bg-primary-400 h-12 rounded-100', percent)}></div>
    </div>
  );
}
