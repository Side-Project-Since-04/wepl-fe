import { cn } from '@ui/lib/utils';

const data = [
  { name: '본식', color: 'bg-primary-800' },
  { name: '예물', color: 'bg-primary-600' },
  { name: '혼수', color: 'bg-primary-400' },
  { name: '신혼여행', color: 'bg-primary-300' },
];

function SpendingStatistic() {
  return (
    <section className="bg-gray-100 pt-24 px-20 min-h-screen">
      <div className="text-center">
        <p className="text-gray-500 text-body1 font-normal">카테고리별 현황</p>
        <h4 className="mt-4 text-gray-900 text-headline4">지출 비율을 확인할 수 있어요!</h4>
      </div>

      {/* 도넛 그래프 */}
      <div className="mt-32 text-center">
        <div className="inline-block bg-neutral-black w-156 h-156 rounded-[50%]" />
      </div>

      {/* 범주 */}
      <div className="mt-32 p-20 bg-neutral-white rounded-12 flex flex-col gap-10">
        {data.map((d) => (
          <div>
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-4">
                <span className={cn('rounded-[50%] w-8 h-8', d.color)}></span>
                <span className="text-gray-700 text-sub-title2 ">{d.name}</span>
                <span className="text-gray-400 text-sub-title2 font-medium">12%</span>
              </span>
              <span className="text-gray-700 text-sub-title2">{Number(8000000).toLocaleString()}원</span>
            </div>
          </div>
        ))}
        <p className="mt-16 text-center text-gray-500 text-13">퍼센테이지(%)는 총 예산 금액의 카테고리 비율 입니다.</p>
      </div>
    </section>
  );
}

export default SpendingStatistic;
