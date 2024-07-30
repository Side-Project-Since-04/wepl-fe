'use client';

import { SubTitle1 } from '@ui/src/components/Text';
import WeplBadge from '@ui/src/Badge';
import { useSuspenseGetClassification } from '@/src/features/category/queries';
import type { ClassificationNameType, ClassificationType } from '@/src/features/category/types';

type SpendingSummaryCardProps = {
  classificationName: Lowercase<ClassificationNameType>;
};

const SpendingSummaryCard = ({ classificationName }: SpendingSummaryCardProps) => {
  const { data: classification } = useSuspenseGetClassification(classificationName);

  return (
    <div className="h-[190px] bg-gray-50 flex justify-center items-center">
      <div className="w-[460px] sm:w-[320px] h-[144px] bg-neutral-white rounded-lg px-20 py-24">
        <CardHeader classification={classification} />
        <hr className="border-dashed my-12" />
        <CardContent classification={classification} />
      </div>
    </div>
  );
};

export default SpendingSummaryCard;

const CardHeader = ({ classification }: { classification: ClassificationType }) => {
  return (
    <div className="flex justify-between">
      <SubTitle1 className="text-lg font-bold mb-2">{classification.guide} 예산</SubTitle1>
      <p className="text-18 font-bold mb-4">{classification.budget.toLocaleString()}원</p>
    </div>
  );
};
const CardContent = ({ classification }: { classification: ClassificationType }) => {
  return (
    <div>
      <p className="text-12 text-gray-500 mb-4">지출 완료/대기 금액</p>
      <div className="flex justify-between">
        <div className="flex flex-1">
          <WeplBadge className="bg-semantic-success-100 text-semantic-success-600">완료</WeplBadge>
          <span className="ml-4 whitespace-nowrap text-15 ">{classification.paidSpending.toLocaleString()}원</span>
        </div>
        <div className="flex ">
          <WeplBadge className="bg-semantic-warning-100 text-semantic-warning-600">대기</WeplBadge>
          <span className="ml-4 whitespace-nowrap text-15 ">{classification.notPaidSpending.toLocaleString()}원</span>
        </div>
      </div>
    </div>
  );
};
