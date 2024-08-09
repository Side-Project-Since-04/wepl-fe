import React from 'react';
import { SubTitle1 } from '@ui/src/components/Text';
import WeplBadge from '@ui/src/Badge';

interface SpendingSummaryCardProps {
  name: string;
  notPaidSpending: number;
  paidSpending: number;
  budget: number;
}

const SpendingSummaryCard = ({ ...props }: SpendingSummaryCardProps) => {
  return (
    <div className="h-[190px] bg-gray-50 flex justify-center items-center">
      <div className="w-[460px] sm:w-[320px] h-[144px] bg-neutral-white rounded-lg px-20 py-24">
        <CardHeader budget={props.budget} name={props.name} />
        <hr className="border-dashed my-12" />
        <CardContent notPaidSpending={props.notPaidSpending} paidSpending={props.paidSpending} />
      </div>
    </div>
  );
};

export default SpendingSummaryCard;

const CardHeader = ({ name, budget }: { name: string; budget: number }) => {
  return (
    <div className="flex justify-between">
      <SubTitle1 className="text-lg font-bold mb-2">{name} 예산</SubTitle1>
      <p className="text-18 font-bold mb-4">{budget.toLocaleString()}원</p>
    </div>
  );
};
const CardContent = ({ paidSpending, notPaidSpending }: { paidSpending: number; notPaidSpending: number }) => {
  return (
    <div>
      <p className="text-12 text-gray-500 mb-4">지출 완료/대기 금액</p>
      <div className="flex justify-between">
        <div className="flex flex-1">
          <WeplBadge className="bg-semantic-success-100 text-semantic-success-600">완료</WeplBadge>
          <span className="ml-4 whitespace-nowrap text-15 ">{paidSpending.toLocaleString()}원</span>
        </div>
        <div className="flex ">
          <WeplBadge className="bg-semantic-warning-100 text-semantic-warning-600">대기</WeplBadge>
          <span className="ml-4 whitespace-nowrap text-15 ">{notPaidSpending.toLocaleString()}원</span>
        </div>
      </div>
    </div>
  );
};
