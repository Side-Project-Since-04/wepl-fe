import { Skeleton } from '@ui/src/Skeleton';

export const ScheduleCardSkeleton = () => {
  return (
    <div className="w-screen max-w-[768px] flex flex-col items-center h-[404px] text-primary-25 p-32 mb-60">
      <Skeleton className="w-[320px] h-[260px]" />
    </div>
  );
};
