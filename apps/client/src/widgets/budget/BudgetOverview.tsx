'use client';

import { Card } from '@ui/shadcn-ui/card';
import { HeadLine5 } from '@ui/src/components/HeadLine';
import Icon from '@ui/src/Icon';
import { SubTitle1, TextBody1, TextBody2 } from '@ui/src/components/Text';
import { DonutProgress } from './common/DonutPorgress';
import { useSuspenseGetWeddingInfo } from '@/src/features/wedding/queries';
import Link from 'next/link';

const BudgetOverview = () => {
  const { data } = useSuspenseGetWeddingInfo();
  const { spendingPerBudget, totalBudget, totalSpending } = data;

  return (
    <div className="mb-32">
      <HeadLine5>총 예산 대비 지출</HeadLine5>
      <SubTitle1 className="text-gray-500 font-normal mb-32">해당 비율은 총 예산금액/총 지출금액 비율입니다.</SubTitle1>
      <div className="flex justify-center items-center gap-34 my-24">
        <DonutProgress progress={spendingPerBudget} size={156} />
      </div>
      <div className="flex flex-col justify-center items-center gap-16 my-16">
        <BudgetOverview.BudgetInfoCard totalBudget={totalBudget} />
        <BudgetOverview.SpendInfoCard totalSpending={totalSpending} />
      </div>
    </div>
  );
};

const BudgetInfoCard = ({ totalBudget }: { totalBudget: number }) => {
  return (
    <Link href="/budget/list">
      <Card className="w-[320px] h-70 px-16 py-14 bg-gray-50">
        <div className="flex items-center">
          <div className="bg-gray-300 rounded-full flex items-center justify-center mr-3">
            <Icon name="gray-wepl" size={40} />
          </div>
          <div className="flex-grow ml-12">
            <TextBody2 className="text-gray-600">총 예산 금액</TextBody2>
            <TextBody1>{totalBudget.toLocaleString()}원</TextBody1>
          </div>
          <Icon name="arrow-right" size={16} />
        </div>
      </Card>
    </Link>
  );
};
BudgetOverview.BudgetInfoCard = BudgetInfoCard;

const SpendInfoCard = ({ totalSpending }: { totalSpending: number }) => {
  return (
    <Link href="/spending">
      <Card className="w-[320px] h-70 px-16 py-14 bg-gray-50">
        <div className="flex items-center">
          <div className="bg-teal-500 rounded-full flex items-center justify-center mr-3">
            <Icon name="primary-wepl" size={40} />
          </div>
          <div className="flex-grow ml-12">
            <TextBody2 className="text-gray-600">총 지출 금액</TextBody2>
            <TextBody1>{totalSpending.toLocaleString()}원</TextBody1>
          </div>
          <Icon name="arrow-right" size={16} />
        </div>
      </Card>
    </Link>
  );
};
BudgetOverview.SpendInfoCard = SpendInfoCard;

export default BudgetOverview;
