import { Skeleton } from '@ui/shadcn-ui/skeleton';

export const UserCardSkeleton = () => {
  return (
    <div className="w-screen max-w-[768px] flex flex-col items-center h-[404px] bg-primary-400 gap-24 text-primary-25 p-32 mb-60">
      <Skeleton className="w-[260px] h-[52px]" />
      <Skeleton className="mt-12 w-[260px] h-[336px] border-0" />
    </div>
  );
};

export const BudgetOverViewSkeleton = () => {
  return (
    <div className="w-screen max-w-[768px] flex flex-col items-center h-[404px] text-primary-25 p-32 mb-60">
      <Skeleton className="w-[340px] h-[440px]" />
    </div>
  );
};

export const ScheduleCardSkeleton = () => {
  return (
    <div className="w-screen max-w-[768px] flex flex-col items-center h-[404px] text-primary-25 p-32 mb-60">
      <Skeleton className="w-[320px] h-[260px]" />
    </div>
  );
};
