'use client';
import React from 'react';
import { useSuspenseGetWaitList } from '@/src/features/schedule/queries';
import { ScheduleCard } from './ScheduleCard';
import UpcomingSchedulesList from './UpcomingSchedulesList';

const ScheduleView = () => {
  const { data } = useSuspenseGetWaitList(6);
  return (
    <>
      <ScheduleCard data={data.length > 0 ? data[0] : null} />
      {data.length > 1 && <UpcomingSchedulesList schedules={data.slice(1)} />}
    </>
  );
};

export default ScheduleView;
