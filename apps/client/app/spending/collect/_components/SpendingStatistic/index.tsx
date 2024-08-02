import { cn } from '@ui/lib/utils';
import { useSuspenseGetClassifications } from '@/src/features/category/queries';
import type { PieDataType } from '../SpendingStatisticPieGraph';
import { SpendingStatisticPieGraph } from '../SpendingStatisticPieGraph';

const colors: Record<number, Record<'tailwind' | 'rgb', string>> = {
  1: {
    tailwind: 'bg-primary-800',
    rgb: '#03304d',
  },
  2: {
    tailwind: 'bg-primary-600',
    rgb: '#085972',
  },
  3: {
    tailwind: 'bg-primary-400',
    rgb: '#38abb5',
  },
  4: {
    tailwind: 'bg-primary-300',
    rgb: '#7ddde1',
  },
};

export const SpendingStatistic = () => {
  const { data } = useSuspenseGetClassifications();
  const classifications = data.content.map((classification, idx) => {
    return {
      ...classification,
      color: colors[idx + 1].tailwind,
    };
  });

  const allPaidSpending = classifications.reduce((acc, val) => acc + val.paidSpending, 0);
  const pieData: PieDataType<string>[] = classifications.map((c, idx) => ({
    id: c.name,
    label: c.name,
    value: c.paidSpending,
    color: colors[idx + 1].rgb,
  }));

  return (
    <section className="bg-gray-50 pt-24 px-20 min-h-screen">
      <div className="text-center">
        <p className="text-gray-500 text-body1 font-normal">카테고리별 현황</p>
        <h4 className="mt-4 text-gray-900 text-headline4">지출 비율을 확인할 수 있어요!</h4>
      </div>

      {/* 도넛 그래프 */}
      <div className="mt-32 text-center">
        <SpendingStatisticPieGraph allPaidSpending={allPaidSpending} data={pieData} />
      </div>

      {/* 범주 */}
      <div className="mt-32 p-20 bg-neutral-white rounded-12 flex flex-col gap-10">
        {classifications.map(({ name, guide, color, paidSpending }) => {
          const percent = Math.floor((paidSpending / allPaidSpending) * 100);

          return (
            <div key={name}>
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-4">
                  <span className={cn('rounded-[50%] w-8 h-8', color)} />
                  <span className="text-gray-700 text-sub-title2 ">{guide}</span>
                  {allPaidSpending > 0 && <span className="text-gray-400 text-sub-title2 font-medium">{percent}%</span>}
                </span>
                <span className="text-gray-700 text-sub-title2">{paidSpending.toLocaleString()}원</span>
              </div>
            </div>
          );
        })}
        <p className="mt-16 text-center text-gray-500 text-13">퍼센테이지(%)는 총 예산 금액의 카테고리 비율 입니다.</p>
      </div>
    </section>
  );
};

const PieGraph = () => {};
