import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useSuspenseQuery } from '@tanstack/react-query';
import { ScheduleClient } from '@/src/shared/apis/schedule';

export const MemberKeys = createQueryKeys('schedule', {
  getWaitList: {
    queryKey: null,
    queryFn: () => ScheduleClient.waitingList(),
  },
});

export const useSuspenseGetWaitList = (count: number) => {
  return useSuspenseQuery({
    ...MemberKeys.getWaitList,
    select: (data) => data.content.slice(0, count),
  });
};
