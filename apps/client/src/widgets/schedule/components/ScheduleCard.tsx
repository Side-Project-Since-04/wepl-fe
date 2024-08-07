import { Card, CardContent, CardHeader } from '@ui/shadcn-ui/card';
import { HeadLine4, HeadLine6 } from '@ui/src/components/HeadLine';
import { SubTitle1, TextBody1, TextBody2 } from '@ui/src/components/Text';
import Image from 'next/image';
import React from 'react';
import { calculateDday, formatDate, formatScheduleTime } from '@/src/shared/utils/utils';
import type { ScheduleItemType } from '@/src/features/schedule/types';

export const ScheduleCard: React.FC<{ data: ScheduleItemType | null; title: string }> = ({ data, title }) => {
  return (
    <div className="mx-auto my-24">
      {data ? (
        <>
          <HeadLine4 className="mb-24">{title}</HeadLine4>
          <Card className="w-[320px] ">
            <ScheduleCardHeader category={data.smallCategoryName} daysLeft={data.scheduleStartedDate} />
            <ScheduleCardContent data={data} />
          </Card>
        </>
      ) : (
        <Card className="w-[320px] h-[246px] bg-gray-50 flex flex-col items-center justify-center gap-4">
          <Image alt="smile" className="mb-8" height={80} src="/schedule/smile-face.png" width={44} />
          <TextBody1 className="text-gray-400">등록된 일정이 없어요</TextBody1>
          <TextBody1 className="text-gray-400">지출에 필요한 일정을 등록해주세요</TextBody1>
        </Card>
      )}
    </div>
  );
};
interface ScheduleCardHeaderProps {
  category: string;
  daysLeft: string;
}

const ScheduleCardHeader: React.FC<ScheduleCardHeaderProps> = ({ category, daysLeft }) => (
  <CardHeader className="rounded-t-lg bg-primary-400 text-neutral-white flex-row justify-between items-center px-20 py-12">
    <SubTitle1>{category}</SubTitle1>
    <SubTitle1>{calculateDday(daysLeft)}</SubTitle1>
  </CardHeader>
);

interface ScheduleCardContentProps {
  data: ScheduleItemType;
}

const ScheduleCardContent: React.FC<ScheduleCardContentProps> = ({ data }) => (
  <CardContent className="p-20">
    <SubTitle1 className="">{formatDate(new Date(data.scheduleStartedDate))}</SubTitle1>
    <HeadLine6 className="text-primary-400">{data.scheduleName}</HeadLine6>
    <hr className="my-16 border-gray-100 border-dashed" />
    <div className="flex flex-col gap-8">
      <div className="flex justify-between items-center">
        <TextBody2 className="text-gray-600">시간</TextBody2>
        <TextBody2>{formatScheduleTime(data.scheduleStartedDate, data.scheduleEndedDate) || '-'}</TextBody2>
      </div>
      <div className="flex justify-between items-center">
        <TextBody2 className="text-gray-600">지출</TextBody2>
        <TextBody2 className="text-red-500">{data.cost.toLocaleString() || '-'} 원</TextBody2>
      </div>
      <div className="flex justify-between items-center">
        <TextBody2 className="text-gray-600">메모</TextBody2>
        <TextBody2>{data.memo || '-'}</TextBody2>
      </div>
    </div>
  </CardContent>
);
