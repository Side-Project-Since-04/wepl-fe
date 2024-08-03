import React from 'react';
import { HeadLine5 } from '@ui/src/components/HeadLine';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@ui/src/Accordion';
import { TextBody2 } from '@ui/src/components/Text';
import Link from 'next/link';
import PageLayout from '@/src/pages/PageLayout';

const mockData: ScheduleResponse = {
  content: [
    {
      smallCategoryPk: '1',
      scheduleName: '웨플웨딩홀 계약금 계좌이체',
      scheduleStartedDate: null,
      scheduleEndedDate: null,
      cost: null,
      memo: null,
    },
    {
      smallCategoryPk: '2',
      scheduleName: '스튜디오/메이크업 추가 금액 계좌이체',
      scheduleStartedDate: '2024-05-03',
      scheduleEndedDate: '2024-05-03',
      cost: 3000000,
      memo: 'KB국민은행/메모이 입금 예정',
    },
    {
      smallCategoryPk: '3',
      scheduleName: '웨딩 촬영본 Adobe Photoshop 2024...',
      scheduleStartedDate: null,
      scheduleEndedDate: null,
      cost: null,
      memo: null,
    },
    {
      smallCategoryPk: '4',
      scheduleName: '웨딩링 픽업(안구정 갤러리아 백화점)',
      scheduleStartedDate: null,
      scheduleEndedDate: null,
      cost: null,
      memo: null,
    },
    {
      smallCategoryPk: '5',
      scheduleName: '화이트태닝 20회 선 결제',
      scheduleStartedDate: null,
      scheduleEndedDate: null,
      cost: null,
      memo: null,
    },
  ],
  page: 0,
  size: 5,
  totalElements: 5,
  totalPages: 1,
};

interface ScheduleItem {
  smallCategoryPk: string;
  scheduleName: string;
  scheduleStartedDate: string | null;
  scheduleEndedDate: string | null;
  cost: number | null;
  memo: string | null;
}

// API 응답의 전체 구조 정의
interface ScheduleResponse {
  content: ScheduleItem[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

// ScheduleCard 컴포넌트의 props 타입 정의
interface ScheduleCardProps {
  schedules: ScheduleItem[];
}

const UpcomingSchedulesList = () => {
  return (
    <PageLayout className="w-[366px]" isPadding>
      <div className="flex justify-between mb-16">
        <HeadLine5>이후 일정</HeadLine5>
        <Link className="text-auxiliary-blue" href="/schedule">
          전체보기
        </Link>
      </div>
      <ScheduleCard schedules={mockData.content} />{' '}
    </PageLayout>
  );
};

export default UpcomingSchedulesList;

const ScheduleCard = ({ schedules }: ScheduleCardProps) => {
  return (
    <Accordion className="w-[320px]" collapsible type="single">
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
                <TextBody2 className="text-gray-600">{schedule.cost?.toLocaleString()}원</TextBody2>
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
