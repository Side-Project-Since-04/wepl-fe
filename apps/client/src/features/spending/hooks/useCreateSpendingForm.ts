import { z } from 'zod';
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { formatTime } from '@/src/shared/utils/date-utils';
import { useToast } from '@ui/src/Toast';
import { zodResolver } from '@hookform/resolvers/zod';

const timeSchema = z.union([z.number().int().min(0).max(23), z.null(), z.undefined()]);

const minuteSchema = z.union([z.number().int().min(0).max(59), z.null(), z.undefined()]);

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

export type SpendingFormDataType = z.infer<typeof spendingFormSchema>;

// 타입 정의

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

  const handleSubmit = (data: SpendingFormDataType) => {
    const paidAt = format(data.paidAt, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
    const formattedDate = format(data.paidAt, 'yyyy-MM-dd');

    let scheduleStartedAt: string | undefined;
    let scheduleEndedAt: string | undefined;

    if (data.startedHour && data.startedMin) {
      const startHour = data.startedHour.toString().padStart(2, '0');
      const startMin = data.startedMin.toString().padStart(2, '0');
      scheduleStartedAt = formatTime(formattedDate, startHour, startMin);
    }

    if (data.endHour && data.endMin) {
      const endHour = data.endHour.toString().padStart(2, '0');
      const endMin = data.endMin.toString().padStart(2, '0');
      scheduleEndedAt = formatTime(formattedDate, endHour, endMin);
    }

    if (scheduleEndedAt && !scheduleStartedAt) {
      toast({
        variant: 'alert',
        title: '저장을 실패했습니다',
        duration: 1500,
      });
      return;
    }

    const submitData = {
      smallCategoryPk: smallCategoryPk,
      cost: data.cost ? data.cost : 0,
      scheduleName: data.scheduleName,
      paidAt,
      ...(scheduleStartedAt && { scheduleStartedAt }),
      ...(scheduleEndedAt && { scheduleEndedAt }),
      ...(data.memo && { memo: data.memo }),
    };

    console.log(submitData);
  };

  return {
    form,
    handleSubmit,
  };
};
