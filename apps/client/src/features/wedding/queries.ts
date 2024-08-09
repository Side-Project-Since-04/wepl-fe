import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { useToast } from '@ui/src/Toast';
import { useRouter } from 'next/navigation';
import type { WeddingInfoType } from '@fsd/features/wedding/types';
import { WeddingClient } from '@/src/shared/apis/wedding';

export const WeddingKeys = createQueryKeys('wedding', {
  getWeddingInfo: {
    queryKey: null,
    queryFn: () => WeddingClient.getWeddingInfo(),
  },
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
    onSuccess: () => {
      toast({ variant: 'success', title: '완료!', duration: 1500 });
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

export const useUpdateWeddingInfo = () => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: (formData: WeddingInfoType) => WeddingClient.updateWeddingInfo(formData),
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

export const useDeleteWeddingConnection = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: () => WeddingClient.deleteWeddingConnection(),
    onSuccess: () => {
      toast({ variant: 'success', title: '완료!', duration: 1500 });

      // 짝궁 연결끊기 후, invalidate
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
