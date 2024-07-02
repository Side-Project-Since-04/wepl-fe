import { axiosInstance } from '@/src/shared/config/axios';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useToast } from '@ui/src/Toast';

const weddingKeys = {
  list: ['wedding'] as const,
  create: () => [...weddingKeys.list, 'create'] as const,
  update: () => [...weddingKeys.list, 'refresh'] as const,
};

interface CreateWeddingInfoFormType {
  weddingDate: string;
  weddingTime: string;
  weddingHall: string;
}

export const useCreateWeddingInfo = () => {
  const { toast } = useToast();

  const weddingInfoSubmit = async (formData: CreateWeddingInfoFormType) => {
    return await axiosInstance.post('/wedding', { ...formData });
  };

  return useMutation({
    mutationKey: weddingKeys.create(),
    mutationFn: weddingInfoSubmit,
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
