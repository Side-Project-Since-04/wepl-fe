'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Header from '@ui/src/components/Header';
import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import { useMutation } from '@tanstack/react-query';
import moment from 'moment';
import { toast } from '@ui/src/Toast';
import PageLayout from '@/src/pages/PageLayout';
import SpendingForm from '@/src/widgets/spending/common/SpendingForm';
import { useSpendingStore } from '@/src/features/spending/store';
import type { ClassificationNameType } from '@/src/features/category/types';
import { SpendingClient } from '@/src/shared/apis/spending';
import type { SpendingInputType } from '@/src/features/spending/types';

/**
 * 지출액
 * 지출일
 * 일정명
 * 시작 시간
 * 종료 시간
 * 메모
 */
const formSchema = z.object({
  cost: z.string().min(1, '지출액을 입력해주세요'),
  paidAt: z.union([
    z.string().refine((val) => !isNaN(Date.parse(val)), {
      message: '유효한 날짜 형식이어야 합니다.',
    }),
    z.date(),
  ]),
  scheduleName: z.string().trim().min(1, '일정명을 입력해주세요'),
  startedHour: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return value === '' || (numberValue >= 0 && numberValue <= 23);
  }),
  startedMin: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return value === '' || (numberValue >= 0 && numberValue <= 59);
  }),
  endHour: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return value === '' || (numberValue >= 0 && numberValue <= 23);
  }),
  endMin: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return value === '' || (numberValue >= 0 && numberValue <= 59);
  }),
  memo: z.string(),
});

export type SpendingFormDataType = z.infer<typeof formSchema>;

interface SpendingFormPageProps {
  params: {
    classification: Lowercase<ClassificationNameType>;
    smallCategoryPk: string;
  };
}

const SpendingFormPage = ({ params }: SpendingFormPageProps) => {
  const router = useRouter();
  const { item } = useSpendingStore();

  const { mutate: createSpending, isPending: isPendingCreateSpending } = useMutation({
    mutationFn: (spendingInput: Partial<SpendingInputType>) => SpendingClient.createSpending(spendingInput),
  });

  const form = useForm<SpendingFormDataType>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      cost: '',
      scheduleName: '',
      memo: '',
      startedHour: '',
      startedMin: '',
      endHour: '',
      endMin: '',
    },
  });
  let initValue;
  const extractTimeComponents = (dateTimeString: string | undefined) => {
    if (!dateTimeString) return { hour: '', min: '' };
    const [hour, min] = dateTimeString.split(':');
    return { hour, min };
  };

  if (item) {
    const { cost, scheduleName, memo, scheduleStartedAt, scheduleEndedAt, paidAt } = item;

    const { hour: startedHour, min: startedMin } = extractTimeComponents(scheduleStartedAt);
    const { hour: endHour, min: endMin } = extractTimeComponents(scheduleEndedAt);

    initValue = {
      cost,
      scheduleName,
      memo,
      startedHour,
      startedMin,
      endHour,
      endMin,
      paidAt,
    };
  }

  const handleSaveBtn = () => {
    const { cost, paidAt, startedMin, startedHour, scheduleName, endMin, endHour, memo } = form.getValues();
    const paidAtMoment = moment(paidAt);

    const spendingInput: Partial<SpendingInputType> = {
      smallCategoryPk: params.smallCategoryPk,
      cost: Number(cost),
      paidAt: paidAtMoment.toDate(),
      scheduleName,
      scheduleStartedAt: moment(paidAtMoment).hour(Number(startedHour)).minute(Number(startedMin)).toDate(),
      scheduleEndedAt: moment(paidAtMoment).hour(Number(endHour)).minute(Number(endMin)).toDate(),
      memo,
    };

    createSpending(spendingInput, {
      onSuccess() {
        toast({
          variant: 'success',
          title: '지출 항목 생성을 성공했습니다',
          duration: 1500,
        });
        router.back();
      },
      onError() {
        toast({
          variant: 'alert',
          title: '지출 항목 생성을 실패했습니다',
          duration: 1500,
        });
      },
    });
  };

  /**
   * 헤더에 사용되는 컴포넌트
   */
  const CenterHeader = useCallback(() => {
    return <h1 className="text-2xl font-bold text-center">지출액 추가</h1>;
  }, []);

  const LeftHeader = useCallback(() => {
    return (
      <Button
        className="p-0"
        onClick={() => {
          router.back();
        }}
        variant="ghost"
      >
        <Icon name="arrow-left" size={25} />
      </Button>
    );
  }, []);

  const RightHeader = useCallback(() => {
    return (
      <Button
        className="p-0"
        disabled={!form.formState.isValid || form.formState.isSubmitting}
        onClick={form.handleSubmit(handleSaveBtn)}
        variant="ghost"
      >
        저장
      </Button>
    );
  }, [form]);

  return (
    <PageLayout isPadding>
      <Header center={<CenterHeader />} left={<LeftHeader />} right={<RightHeader />} />
      <SpendingForm form={form} initValues={initValue} onSave={form.handleSubmit(handleSaveBtn)} />
    </PageLayout>
  );
};

export default SpendingFormPage;
