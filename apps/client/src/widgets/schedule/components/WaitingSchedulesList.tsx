import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ui/src/Accordion';
import { TextBody1, TextBody2 } from '@ui/src/components/Text';
import WeplBadge from '@ui/src/Badge';
import { Card } from '@ui/shadcn-ui/card';
import Image from 'next/image';
import type { ScheduleItemType } from '@/src/features/schedule/types';
import { calculateDday, formatDate, formatScheduleTime } from '@/src/shared/utils/utils';

// ScheduleCard 컴포넌트의 props 타입 정의
interface ScheduleCardProps {
  schedules: ScheduleItemType[];
}

const WaitingSchedulesList: React.FC<ScheduleCardProps> = ({ schedules }) => {
  if (schedules.length === 0) {
    return (
      <Card className="w-full h-[246px] flex flex-col items-center justify-center gap-4 border-none shadow-none">
        <Image alt="smile" className="mb-8" height={80} src="/schedule/smile-face.png" width={44} />
        <TextBody1 className="text-gray-400">결혼식은 준비는 잘 진행하고 계시나요?</TextBody1>
        <TextBody1 className="text-gray-400">예정된 일정이 없습니다.</TextBody1>
      </Card>
    );
  }
  return <ScheduleCard schedules={schedules} />;
};

export default WaitingSchedulesList;

const ScheduleCard = ({ schedules }: ScheduleCardProps) => {
  return (
    <Accordion className="w-full" collapsible type="single">
      {schedules.map((schedule) => (
        <AccordionItem key={schedule.smallCategoryPk} value={`item-${schedule.smallCategoryPk}`}>
          <AccordionTrigger className="h-92" headerClassName="h-92 px-20 bg-neutral-white border-2">
            <div>
              <div className="flex gap-12 mb-6">
                <WeplBadge className="bg-semantic-error-100 text-semantic-error-600 rounded-lg w-40 h-22">
                  {calculateDday(schedule.scheduleStartedDate)}
                </WeplBadge>
                <TextBody2 className="text-gray-600">{formatDate(new Date(schedule.scheduleStartedDate))}</TextBody2>
              </div>

              <TextBody2 className="flex-grow text-left text-[16px]">{schedule.scheduleName}</TextBody2>
            </div>
          </AccordionTrigger>
          <AccordionContent className="border-x-2 border-b-2">
            <div className="px-20 pb-20">
              <div className="flex gap-12">
                <TextBody2 className="text-gray-400">시간</TextBody2>
                <TextBody2 className="text-gray-600">
                  {formatScheduleTime(schedule.scheduleStartedDate, schedule.scheduleEndedDate) || '-'}
                </TextBody2>
              </div>
              <div className="flex gap-12">
                <TextBody2 className="text-gray-400">지출</TextBody2>
                <TextBody2 className="text-gray-600">{schedule.cost.toLocaleString()}원</TextBody2>
              </div>
              <div className="flex gap-12">
                <TextBody2 className="text-gray-400">메모</TextBody2>
                <TextBody2 className="text-gray-600">{schedule.memo ? schedule.memo : '-'}</TextBody2>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};
