import React from 'react';
import { HeadLine5 } from '@ui/src/components/HeadLine';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ui/src/Accordion';
import { TextBody2 } from '@ui/src/components/Text';
import Link from 'next/link';
import PageLayout from '@/src/pages/PageLayout';
import type { ScheduleItemType } from '@/src/features/schedule/types';

// ScheduleCard 컴포넌트의 props 타입 정의
interface ScheduleCardProps {
  schedules: ScheduleItemType[];
}

const UpcomingSchedulesList: React.FC<ScheduleCardProps> = ({ schedules }) => {
  return (
    <PageLayout className="w-[366px]" isPadding>
      <div className="flex justify-between mb-16">
        <HeadLine5>이후 일정</HeadLine5>
        <Link className="text-auxiliary-blue" href="/schedule">
          전체보기
        </Link>
      </div>
      <ScheduleCard schedules={schedules} />
    </PageLayout>
  );
};

export default UpcomingSchedulesList;

const ScheduleCard = ({ schedules }: ScheduleCardProps) => {
  return (
    <Accordion className="w-full" collapsible type="single">
      {schedules.map((schedule, idx) => (
        <AccordionItem key={schedule.smallCategoryPk} value={`item-${schedule.smallCategoryPk}`}>
          <AccordionTrigger className="flex items-center">
            <span className="mr-6 text-[18px] text-primary-500 ">{idx + 1}</span>
            <TextBody2 className="flex-grow text-left">{schedule.scheduleName}</TextBody2>
          </AccordionTrigger>
          <AccordionContent className="bg-gray-50 ">
            <div className="px-32 pb-20">
              <div className="flex gap-12">
                <TextBody2 className="text-gray-400">일정</TextBody2>
                <TextBody2 className="text-gray-600"> 202-05-03(금)</TextBody2>
              </div>
              <div className="flex gap-12">
                <TextBody2 className="text-gray-400">시간</TextBody2>{' '}
                <TextBody2 className="text-gray-600">오후 12:00 - 오흐 2:00</TextBody2>
              </div>
              <div className="flex gap-12">
                <TextBody2 className="text-gray-400">지출</TextBody2>{' '}
                <TextBody2 className="text-gray-600">{schedule.cost.toLocaleString()}원</TextBody2>
              </div>
              <div className="flex gap-12">
                <TextBody2 className="text-gray-400">메모</TextBody2>{' '}
                <TextBody2 className="text-gray-600">{schedule.memo ? schedule.memo : '-'}</TextBody2>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
