import React from 'react';

const SpendingSummaryCard = () => {
  return (
    <div className="h-[190px] bg-gray-50 flex justify-center items-center">
      <div className="w-[460px] sm:w-[320px] h-[144px] bg-neutral-white rounded-lg px-20 py-24">
        <CardHeader />
        <hr className="border-dashed my-12" />
        <CardContent />
      </div>
    </div>
  );
};

export default SpendingSummaryCard;

const CardHeader = () => {
  return (
    <div className="flex justify-between">
      <SubTitle1 className="text-lg font-bold mb-2">본식 예산</SubTitle1>
      <p className="text-18 font-bold mb-4">40,000,000원</p>
    </div>
  );
};

const CardContent = () => {
  return (
    <div>
      <p className="text-sm text-gray-600 mb-2">지출 완료/대기 금액</p>
      <div className="flex justify-between gap-8">
        <div className="flex items-center">
          <span className="text-xs text-white bg-green-500 px-2 py-1 rounded mr-2">완료</span>
          <span className="text-sm font-bold">10,000,000원</span>
        </div>
        <div className="flex items-center">
          <span className="text-xs text-white bg-yellow-500 px-2 py-1 rounded mr-2">대기</span>
          <span className="text-sm font-bold">24,000,000원</span>
        </div>
      </div>
    </div>
  );
};
