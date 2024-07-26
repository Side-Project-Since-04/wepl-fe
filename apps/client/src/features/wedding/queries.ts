import { WeddingClient } from '@/src/shared/apis/wedding';

import { WeddingInfoType } from '@fsd/features/wedding/types';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useToast } from '@ui/src/Toast';

export const WeddingKeys = createQueryKeys('wedding', {
  getWeddingInfo: {
    queryKey: null,
    queryFn: () => WeddingClient.getWeddingInfo(),
  },
  create: (formData: WeddingInfoType) => ({
    queryKey: [{ formData }],
    queryFn: () => WeddingClient.createWeddingInfo(formData),
  }),
  update: (formData: WeddingInfoType) => ({
    queryKey: [{ formData }],
    queryFn: () => WeddingClient.update,
  }),
  updateTotalBudget: () => ({
    queryKey: ['updateTotalBudget'],
    queryFn: (budget: number) => WeddingClient.updateTotalBudget(budget),
  }),
});

export const useGetWeddingInfo = () => {
  return useQuery(WeddingKeys.getWeddingInfo);
};

export const useSuspenseGetWeddingInfo = () => {
  return useSuspenseQuery(WeddingKeys.getWeddingInfo);
};

export const useCreateWeddingInfo = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: (formData: WeddingInfoType) => WeddingClient.createWeddingInfo(formData),
    onSuccess: (res) => {
      toast({ variant: 'success', title: '완료!', duration: 1500 });
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
