import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import { InvitationButton } from '@/src/widgets/auth/InvitationButton';
import BudgetOverview from '@/src/widgets/budget/BudgetOverview';
import { ScheduleCard } from '@/src/widgets/schedule/ScheduleCard';
import WeddingEventInfo from '@/src/widgets/wedding/WeddingEventInfo';
import { Button } from '@ui/src/Button';
import Header from '@ui/src/components/Header';
import Image from 'next/image';
import React from 'react';

const MainPage = () => {
  const LeftHeader = () => {
    return (
      <Button className="hover:bg-inherit" variant={'ghost'}>
        <Image src="/main/logo.png" alt="wepl" width={80} height={36} />
      </Button>
    );
  };
  return (
    <>
      <Header left={<LeftHeader />} />
      <div className="flex flex-col items-center gap-32">
        <WeddingEventInfo />
        <AsyncBoundary>
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
