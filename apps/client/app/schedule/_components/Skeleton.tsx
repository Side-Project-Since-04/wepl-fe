import { Skeleton } from '@ui/src/Skeleton';

export const ScheduleCardSkeleton = () => {
  return (
    <div className="w-screen max-w-[768px] flex flex-col items-center text-primary-25 p-32">
      <Skeleton className="w-[320px] h-[246px]" />
    </div>
  );
};
