import { Button } from '@ui/src/Button';
import Header from '@ui/src/components/Header';
import Image from 'next/image';
import React, { useCallback } from 'react';
import { Skeleton } from '@ui/src/Skeleton';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import { InvitationButton } from '@/src/widgets/auth/InvitationButton';
import BudgetOverview from '@/src/widgets/budget/BudgetOverview';
import { ScheduleCard } from '@/src/widgets/schedule/ScheduleCard';
import WeddingEventInfo from '@/src/widgets/wedding/WeddingEventInfo';

const MainPage = () => {
  const LeftHeader = useCallback(() => {
    return (
      <Button className="hover:bg-inherit" variant="ghost">
        <Image alt="wepl" height={36} src="/main/logo.png" width={80} />
      </Button>
    );
  }, []);

  return (
    <>
      <Header left={<LeftHeader />} />
      <div className="flex flex-col items-center gap-32">
        <WeddingEventInfo />
        <AsyncBoundary SuspenseFallback={<Skeleton className="h-[300px]" />}>
          <BudgetOverview />
        </AsyncBoundary>
        <InvitationButton />
        <ScheduleCard />
        {/* <UpcomingSchedulesList /> */}
        {/* <WeddingInfoCard /> */}
      </div>
    </>
  );
};

export default MainPage;
