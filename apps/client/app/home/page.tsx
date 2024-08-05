import Image from 'next/image';
import Header from '@ui/src/components/Header';
import { Button } from '@ui/src/Button';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import { InvitationButton } from '@/src/widgets/auth/InvitationButton';
import BudgetOverview from '@/src/widgets/budget/BudgetOverview';
import { ScheduleCard } from '@/src/widgets/schedule/ScheduleCard';
import WeddingEventInfo from '@/src/widgets/wedding/WeddingEventInfo';
import UpcomingSchedulesList from '@/src/widgets/schedule/UpcomingSchedulesList';
import { CardSkeleton } from './_components/CardSkeleton';

const LeftHeader = () => {
  return (
    <Button className="hover:bg-inherit" variant="ghost">
      <Image alt="wepl" height={36} src="/main/Logo.png" width={80} />
    </Button>
  );
};

const MainPage = () => {
  return (
    <>
      <Header left={<LeftHeader />} />
      <div className="flex flex-col items-center gap-32">
        <AsyncBoundary SuspenseFallback={<CardSkeleton />}>
          <WeddingEventInfo />
        </AsyncBoundary>
        <AsyncBoundary>
          <BudgetOverview />
        </AsyncBoundary>
        <InvitationButton />
        <ScheduleCard />
        <UpcomingSchedulesList />
        {/* <WeddingInfoCard /> */}
      </div>
    </>
  );
};

export default MainPage;
