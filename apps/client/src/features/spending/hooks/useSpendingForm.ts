import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useToast } from '@ui/src/Toast';
import dayjs from 'dayjs';
import { useRouter } from 'next/navigation';
import { formatTime } from '@/src/shared/utils/date-utils';
import type { SpendingInputType } from '../types';
import { useCreateSpending, useUpdateSpending } from '../queries';

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
 * useCreateSpendingForm
 */
export const useCreateSpendingForm = (smallCategoryPk: string) => {
  const form = useForm<SpendingFormDataType>({
    resolver: zodResolver(spendingFormSchema),
    mode: 'onChange',
    defaultValues: {
      scheduleName: '',
      memo: '',
    },
  });
  const { toast } = useToast();
  const { mutate, isPending } = useCreateSpending();

  const handleSubmit = (data: SpendingFormDataType) => {
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

    mutate({
      spendingInput: submitData,
    });
  };

  return {
    form,
    handleSubmit,
    isSubmitting: isPending,
  };
};

/**
 * useUpdateSpendingForm
 */
export const useUpdateSpendingForm = ({
  smallCategoryPk,
  spendingPk,
}: {
  smallCategoryPk: string;
  spendingPk: string;
}) => {
  const form = useForm<SpendingFormDataType>({
    resolver: zodResolver(spendingFormSchema),
    mode: 'onChange',
    defaultValues: {
      scheduleName: '',
      memo: '',
    },
  });
  const router = useRouter();
  const { toast } = useToast();
  const { mutate, isPending } = useUpdateSpending();

  const handleSubmit = (data: SpendingFormDataType) => {
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

    mutate(
      {
        spendingPk,
        spendingInput: submitData,
      },
      {
        onSuccess() {
          router.back();
        },
      },
    );
  };

  return {
    form,
    handleSubmit,
    isSubmitting: isPending,
  };
};
