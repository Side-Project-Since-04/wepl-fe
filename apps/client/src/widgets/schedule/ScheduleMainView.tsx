import React from 'react';
import { WeplTabs } from '@ui/src/Tabs';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import { ScheduleCard } from './components/ScheduleCard';
import WaitingSchedulesList from './components/WaitingSchedulesList';
import CompletedSchedulesList from './components/CompletedScheduleList';

interface ScheduleMainViewProps {
  cardSkeleton: React.ReactNode;
}

const ScheduleMainView: React.FC<ScheduleMainViewProps> = ({ cardSkeleton }) => {
  return (
    <>
      <section className="px-20 flex flex-col items-center ">
        <AsyncBoundary SuspenseFallback={cardSkeleton}>
          <ScheduleCard data={null} title="곧 일정이 시작됩니다!" />
        </AsyncBoundary>
      </section>
      <section className="my-44">
        <ScheduleTabs />
      </section>
    </>
  );
};

export default ScheduleMainView;

const tmp = [
  {
    smallCategoryPk: '123454',
    smallCategoryName: '웨딩',
    spendingPk: '123aaa',
    scheduleStartedDate: '2024-05-23 12:20',
    scheduleEndedDate: '2024-05-23 12:40',
    scheduleName: '입금',
    cost: 5000000,
    memo: '',
  },
  {
    smallCategoryPk: '1234',
    smallCategoryName: '본식',
    spendingPk: '12311aaa',
    scheduleStartedDate: '2024-05-24 12:20',
    scheduleEndedDate: '2024-05-24 12:40',
    scheduleName: '입금2',
    cost: 6000000,
    memo: '',
  },
  {
    smallCategoryPk: '2',
    smallCategoryName: '신혼여행',
    spendingPk: '123aa123a',
    scheduleStartedDate: '2024-09-25 12:20',
    scheduleEndedDate: '2024-09-25 12:40',
    scheduleName: '입금1',
    cost: 7000000,
    memo: '12344',
  },
];

const ScheduleTabs = () => {
  const items = [
    { label: '예정된 일정', content: <WaitingSchedulesList schedules={[]} /> },
    {
      label: '완료된 일정',
      content: <CompletedSchedulesList schedules={[]} />,
    },
  ];
  return <WeplTabs items={items} tabsContentClassName="px-20" tabsListClassName="border-t-0 mb-20" />;
};
