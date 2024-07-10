import { WeddingClient } from '@/src/shared/apis/wedding';
import { WeddingInfoType } from '@/src/shared/types/wedding';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useMutation } from '@tanstack/react-query';
import { useToast } from '@ui/src/Toast';

export const WeddingKeys = createQueryKeys('wedding', {
  create: (formData: WeddingInfoType) => ({
    queryKey: [{ formData }],
    queryFn: () => WeddingClient.createWeddingInfo(formData),
  }),
  update: (formData: WeddingInfoType) => ({
    queryKey: [{ formData }],
    queryFn: () => WeddingClient.update,
  }),
});

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
