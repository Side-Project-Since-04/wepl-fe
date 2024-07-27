import Chip from '../Chip';

function SpendingHistory() {
  return (
    <section>
      {/* Chips */}
      <div className="py-12 px-20 flex gap-8">
        <Chip isSelected name="전체" />
        <Chip isSelected={false} name="본식" />
        <Chip isSelected={false} name="예물" />
      </div>

      {/* 지출 내역 - list */}
      <div className="py-24 px-30">
        {/* 총 결제금액 */}
        <div className="text-gray-800">
          <p className="text-sub-title2">총 결제 금액</p>
          <h4 className="text-headline4">{Number(123456789).toLocaleString()}</h4>
        </div>

        {/* 지출 항목 */}
        <div className="mt-16 border-t-[1px] border-gray-100">
          <div className="flex justify-between py-12 border-b-[1px] border-dashed border-gray-100 text-body2 text-gray-500 font-normal">
            <span>웨딩홀</span>
            <span>{Number(12000000).toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-12 border-b-[1px] border-dashed border-gray-100 text-body2 text-gray-500 font-normal">
            <span>웨딩홀</span>
            <span>{Number(12000000).toLocaleString()}</span>
          </div>
          <div className="flex justify-between py-12 border-b-[1px] border-dashed border-gray-100 text-body2 text-gray-500 font-normal">
            <span>웨딩홀</span>
            <span>{Number(12000000).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpendingHistory;
