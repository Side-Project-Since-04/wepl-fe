import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useToast } from '@ui/src/Toast';
import { useRouter } from 'next/navigation';
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

export const useGetMember = () => {
  return useQuery(MemberKeys.getMember);
};

export const useDeleteMember = () => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: () => MemberClient.deleteMember(),
    onSuccess: () => {
      toast({ variant: 'success', title: '완료!', duration: 1500 });
      router.push('/');
    },
    onError: () => {
      toast({
        variant: 'alert',
        title: '실패!',
        duration: 1500,
      });
    },
  });
};
