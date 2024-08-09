import React from 'react';
import ScheduleMainView from '@/src/widgets/schedule/ScheduleMainView';
import { ScheduleCardSkeleton } from '@/app/schedule/_components/Skeleton';

const ScheduleMainPage = () => {
  return (
    <main>
      <ScheduleMainView cardSkeleton={<ScheduleCardSkeleton />} />
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
