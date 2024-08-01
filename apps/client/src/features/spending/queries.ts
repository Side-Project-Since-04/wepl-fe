import { SpendingClient } from '@/src/shared/apis/spending';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@ui/src/Toast';
import { SpendingDataType } from './types';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const useCreateSpending = (router: AppRouterInstance) => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: (spendingData: Partial<SpendingDataType>) => SpendingClient.createSpending(spendingData),
    onSuccess: (res) => {
      toast({ variant: 'success', title: '완료!', duration: 1500 });
      router.back();
    },
    onError: (error) => {
      toast({
        variant: 'alert',
        title: '실패!',
        duration: 1500,
      });
    },
  });
};
