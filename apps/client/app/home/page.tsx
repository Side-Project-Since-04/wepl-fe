import Image from 'next/image';
import Header from '@ui/src/components/Header';
import { Button } from '@ui/src/Button';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import { InvitationButton } from '@/src/widgets/auth/InvitationButton';
import BudgetOverview from '@/src/widgets/budget/BudgetOverview';
import WeddingEventInfo from '@/src/widgets/wedding/WeddingEventInfo';
import ScheduleView from '@/src/widgets/schedule/ScheduleView';
import { BudgetOverViewSkeleton, ScheduleCardSkeleton, UserCardSkeleton } from './_components/Skeleton';

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
        <AsyncBoundary SuspenseFallback={<UserCardSkeleton />}>
          <WeddingEventInfo />
        </AsyncBoundary>
        <AsyncBoundary SuspenseFallback={<BudgetOverViewSkeleton />}>
          <BudgetOverview />
        </AsyncBoundary>
        <InvitationButton />
        <AsyncBoundary SuspenseFallback={<ScheduleCardSkeleton />}>
          <ScheduleView />
        </AsyncBoundary>
        {/* <WeddingInfoCard /> */}
      </div>
    </>
  );
};

export default MainPage;
