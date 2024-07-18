import { Card, CardContent, CardHeader } from '@ui/shadcn-ui/card';
import { Button } from '@ui/src/Button';
import { HeadLine4, HeadLine6 } from '@ui/src/components/HeadLine';
import { SubTitle1, TextBody1, TextBody2 } from '@ui/src/components/Text';
import React from 'react';

export const ScheduleCard: React.FC = () => {
  const data = '';

  return (
    <div className="mx-auto my-24">
      {data ? (
        <>
          <HeadLine4 className="mb-24">곧 일정이 시작됩니다!</HeadLine4>
          <Card className="w-[320px] ">
            <ScheduleCardHeader category={'소분류'} daysLeft={23} />
            <ScheduleCardContent date={'2022.10.23'} title={'2022.10.23'} time={'13:00'} amount={10} />
          </Card>
        </>
      ) : (
        <Card className="w-[320px] h-[246px] bg-gray-50 flex flex-col items-center justify-center gap-2">
          <TextBody1 className="text-gray-400">등록된 일정이 없어요</TextBody1>
          <TextBody1 className="text-gray-400">지출에 필요한 일정을 등록해주세요</TextBody1>
          <Button className="mt-20 h-40 w-110 bg-neutral-white text-primary-400">일정 등록하기</Button>
        </Card>
      )}
    </div>
  );
};
interface ScheduleCardHeaderProps {
  category: string;
  daysLeft: number;
}

const ScheduleCardHeader: React.FC<ScheduleCardHeaderProps> = ({ category, daysLeft }) => (
  <CardHeader className="rounded-t-lg bg-primary-400 text-neutral-white flex-row justify-between items-center px-20 py-12">
    <SubTitle1>{category}</SubTitle1>
    <SubTitle1>D-{daysLeft}</SubTitle1>
  </CardHeader>
);

interface ScheduleCardContentProps {
  date: string;
  title: string;
  time: string;
  amount: number;
  memo?: string;
}

const ScheduleCardContent: React.FC<ScheduleCardContentProps> = ({ date, title, time, amount, memo }) => (
  <CardContent className="p-20">
    <SubTitle1 className="">{'2024년 05월 23일 (일)'}</SubTitle1>
    <HeadLine6 className="text-primary-400">{title}</HeadLine6>
    <hr className="my-16 border-gray-100 border-dashed" />
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <TextBody2 className="text-gray-600">시간</TextBody2>
        <TextBody2>{time || '- '}</TextBody2>
      </div>
      <div className="flex justify-between items-center">
        <TextBody2 className="text-gray-600">지출</TextBody2>
        <TextBody2 className="text-red-500">{amount.toLocaleString() || '-'} 원</TextBody2>
      </div>
      <div className="flex justify-between items-center">
        <TextBody2 className="text-gray-600">메모</TextBody2>
        <TextBody2>{memo || '-'}</TextBody2>
      </div>
    </div>
  </CardContent>
);
