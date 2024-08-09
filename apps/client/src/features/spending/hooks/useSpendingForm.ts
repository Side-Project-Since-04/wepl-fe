import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@ui/src/Toast';
import dayjs from 'dayjs';
import type { UseMutateFunction } from '@tanstack/react-query';
import { formatTime } from '@/src/shared/utils/date-utils';
import type { SpendingInputType } from '../types';

/**
 * spendingFormSchema
 */
const timeSchema = z.union([z.number().int().min(0).max(23), z.null(), z.undefined()]);
const minuteSchema = z.union([z.number().int().min(0).max(59), z.null(), z.undefined()]);
export type SpendingFormDataType = z.infer<typeof spendingFormSchema>;

export const spendingFormSchema = z.object({
  cost: z.string().min(1, '지출액을 입력해주세요').nullable(),
  paidAt: z.union([z.string().refine((val) => !isNaN(Date.parse(val)), {}), z.date()]),
  scheduleName: z.string().trim().min(1, '일정명을 입력해주세요').max(16, '예식 장소 글자수를 15자 이하로 해주세요.'),
  startedHour: timeSchema,
  startedMin: minuteSchema,
  endHour: timeSchema,
  endMin: minuteSchema,
  memo: z.string(),
});

/**
 * useSpendingForm
 */
type MutateFnParams<T> =
  | {
      spendingInput: Partial<SpendingInputType>;
    }
  | {
      spendingPk: string;
      spendingInput: Partial<SpendingInputType>;
    };

type CreateHandleSubmitParams<T> = {
  // type: T;
  smallCategoryPk: string;
  mutateFn: UseMutateFunction<void, Error, T>;
  mutateFnParams: Omit<T, 'spendingInput'>;
};

export const useSpendingForm = () => {
  const form = useForm<SpendingFormDataType>({
    resolver: zodResolver(spendingFormSchema),
    mode: 'onChange',
    defaultValues: {
      scheduleName: '',
      memo: '',
    },
  });
  const { toast } = useToast();

  const createHandleSubmit =
    <
      T extends
        | {
            spendingInput: Partial<SpendingInputType>;
          }
        | {
            spendingPk: string;
            spendingInput: Partial<SpendingInputType>;
          },
    >({
      smallCategoryPk,
      mutateFn,
      mutateFnParams,
    }: CreateHandleSubmitParams<T>) =>
    (data: SpendingFormDataType) => {
      const paidAt = dayjs(data.paidAt).format('YYYY-MM-DD HH:mm');
      const formattedDate = dayjs(data.paidAt).format('YYYY-MM-DD');

      let scheduleStartedAt: string | undefined;
      let scheduleEndedAt: string | undefined;

      if (data.startedHour && data.startedMin) {
        scheduleStartedAt = formatTime(formattedDate, data.startedHour, data.startedMin);
      }

      if (data.endHour && data.endMin) {
        scheduleEndedAt = formatTime(formattedDate, data.endHour, data.endMin);
      }

      if (scheduleEndedAt && !scheduleStartedAt) {
        toast({
          variant: 'alert',
          title: '종료 시간만 넣을 순 없어요 😀',
          duration: 2000,
        });
        return;
      }

      const submitData: Partial<SpendingInputType> = {
        smallCategoryPk,
        cost: data.cost ? parseInt(data.cost.replace(/,/g, '').replace('원', '')) : 0,
        scheduleName: data.scheduleName,
        paidAt,
        memo: data.memo,
      };

      if (scheduleStartedAt) {
        submitData.scheduleStartedAt = scheduleStartedAt;
      }
      if (scheduleEndedAt) {
        submitData.scheduleEndedAt = scheduleEndedAt;
      }
      if (data.memo) {
        submitData.memo = data.memo;
      }

      // const fnParams = (() => {
      //   if (type === 'create') {
      //     mutateFnParams;

      //     return {
      //       spendingInput: submitData,
      //     };
      //   }

      //   if (type === 'update') {
      //     mutateFnParams,

      //     return {
      //       spendingPk: mutateFnParams.spendingPk as string,
      //       spendingInput: submitData,
      //     };
      //   }

      //   return {};
      // })();

      mutateFnParams;

      mutateFn({
        spendingPk: mutateFnParams.spendingPk,
        spendingInput: submitData,
      });
    };

  return {
    form,
    createHandleSubmit,
  };
};
