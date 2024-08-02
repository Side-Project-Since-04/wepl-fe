import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useSuspenseQuery } from '@tanstack/react-query';
import { MemberClient } from '@/src/shared/apis/member';

export const MemberKeys = createQueryKeys('member', {
  getMember: {
    queryKey: null,
    queryFn: () => MemberClient.getMember(),
  },
});

export const useSuspenseGetMember = () => {
  return useSuspenseQuery(MemberKeys.getMember);
};
