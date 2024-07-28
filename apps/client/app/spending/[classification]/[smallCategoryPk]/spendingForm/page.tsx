'use client';
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Header from '@ui/src/components/Header';
import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import PageLayout from '@/src/pages/PageLayout';
import SpendingForm from '@/src/widgets/spending/common/SpendingForm';
import { useSpendingStore } from '@/src/features/spending/store';

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
    return value == '' || (numberValue >= 0 && numberValue <= 23);
  }),
  startedMin: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return value == '' || (numberValue >= 0 && numberValue <= 59);
  }),
  endHour: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return value == '' || (numberValue >= 0 && numberValue <= 23);
  }),
  endMin: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return value == '' || (numberValue >= 0 && numberValue <= 59);
  }),
  memo: z.string(),
});

export type SpendingFormDataType = z.infer<typeof formSchema>;

const CreateSmallCategorySpendingPage = ({
  params,
}: {
  params: { classification: string; smallCategoryPk: string };
}) => {
  const { item } = useSpendingStore();

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
    console.log(form.getValues());
  };

  const CenterHeader = () => {
    return <h1 className="text-2xl font-bold text-center">지출액 추가</h1>;
  };

  const LeftHeader = () => {
    return (
      <Button variant={'ghost'} className="p-0">
        <Link href={`/spending/${params.classification}/${params.smallCategoryPk}`}>
          <Icon name="arrow-left" size={25} />
        </Link>
      </Button>
    );
  };

  const RightHeader = () => {
    return (
      <Button
        variant={'ghost'}
        className="p-0"
        onClick={form.handleSubmit(handleSaveBtn)}
        disabled={!form.formState.isValid || form.formState.isSubmitting}
      >
        저장
      </Button>
    );
  };

  return (
    <PageLayout isPadding>
      <Header left={<LeftHeader />} center={<CenterHeader />} right={<RightHeader />} />
      <SpendingForm form={form} onSave={form.handleSubmit(handleSaveBtn)} initValues={initValue} />
    </PageLayout>
  );
};

export default CreateSmallCategorySpendingPage;
