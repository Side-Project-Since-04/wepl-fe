import { axiosInstance } from '@/src/shared/config/axios';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useToast } from '@ui/src/Toast';
import { queryKeys } from '@/src/shared/apis';
import { WeddingInfoType } from '@/src/shared/types/wedding';
import { WeddingClient } from '@/src/shared/apis/wedding';

export const useCreateWeddingInfo = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: WeddingClient.create,
    onSuccess: (res) => {
      toast({
        variant: 'success',
        title: '완료!',
        duration: 1500,
      });
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

export const useGetWeddingInfo = () => {};

export const useUpdateWeddingInfo = () => {};
