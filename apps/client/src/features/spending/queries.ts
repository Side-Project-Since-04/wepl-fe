import { useMutation } from '@tanstack/react-query';
import { useToast } from '@ui/src/Toast';
import { useRouter } from 'next/navigation';
import { SpendingClient } from '@/src/shared/apis/spending';
import type { SpendingDataType } from './types';

export const useCreateSpending = () => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: (spendingData: Partial<SpendingDataType>) => SpendingClient.createSpending(spendingData),
    onSuccess: () => {
      toast({ variant: 'success', title: '완료!', duration: 1500 });
      router.back();
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
