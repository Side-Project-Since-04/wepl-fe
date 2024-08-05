import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@ui/src/Toast';
import { useParams, useRouter } from 'next/navigation';
import { produce } from 'immer';
import { SpendingClient } from '@/src/shared/apis/spending';
import { CategoryKeys } from '../category/queries';
import type { SmallCategoryDetailType } from '../category/types';
import type { SpendingInputType } from './types';

export const useCreateSpending = () => {
  const { toast } = useToast();
  const router = useRouter();

  return useMutation({
    mutationFn: ({ spendingData }: { spendingData: Partial<SpendingInputType> }) =>
      SpendingClient.createSpending(spendingData),
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

export const useUpdateSpending = () => {
  const queryClient = useQueryClient();
  const { toast } = useToast();
  const params = useParams<{
    classificationName: string;
    middleCategoryPk: string;
    smallCategoryPk: string;
  }>() || {
    classificationName: '',
    middleCategoryPk: '',
    smallCategoryPk: '',
  };

  return useMutation({
    mutationFn: ({ spendingPk, spendingInput }: Parameters<typeof SpendingClient.updateSpending>[number]) =>
      SpendingClient.updateSpending({
        spendingPk,
        spendingInput,
      }),
    onSuccess: (_, { spendingPk, spendingInput }) => {
      queryClient.setQueryData<SmallCategoryDetailType>(
        CategoryKeys.getSmallCategoryDetail(params.middleCategoryPk, params.smallCategoryPk).queryKey,
        (prev) => {
          return produce(prev, (draft) => {
            let target = prev?.spendingList.find((spending) => spending.spendingPk === spendingPk);

            if (target) {
              target = { ...target, ...spendingInput };
            }

            return draft;
          });
        },
      );

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

export const useDeleteSpending = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ spendingPk }: { spendingPk: string }) => SpendingClient.deleteSpending(spendingPk),
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

export const useDeleteSpendingSchedule = () => {
  const { toast } = useToast();

  return useMutation({
    mutationFn: ({ spendingPk }: { spendingPk: string }) => SpendingClient.deleteSpendingSchedule(spendingPk),
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
