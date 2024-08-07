import React from 'react';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import { ScheduleCard } from '@/src/widgets/schedule/ScheduleCard';
import ScheduleTabView from '@/src/widgets/schedule/ScheduleTabView';

const ScheduleMainPage = () => {
  return (
    <main>
      <section className="px-20 flex flex-col items-center ">
        <AsyncBoundary SuspenseFallback={<>Loading...</>}>
          <ScheduleCard data={null} title="곧 일정이 시작됩니다!" />
        </AsyncBoundary>
      </section>
      <section className="my-44">
        <ScheduleTabView />
      </section>
    </main>
  );
};

export default ScheduleMainPage;

// interface ScheduleItem {
//   smallCategoryPk: string;
//   scheduleName: string;
//   scheduleStartedDate: string | null;
//   scheduleEndedDate: string | null;
//   cost: number | null;
//   memo: string | null;
// }
