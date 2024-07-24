'use client';
import React from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import Header from '@ui/src/components/Header';
import { Button } from '@ui/src/Button';
import { HeadLine5 } from '@ui/src/components/HeadLine';
import Icon from '@ui/src/Icon';
import PageLayout from '@/src/pages/PageLayout';
import { Input } from '@ui/src/Input';
import CreateSpendingForm from './SmallCategoryForm';

/**
 * 지출액
 * 지출일
 * 일정명
 * 시작 시간
 * 종료 시간
 * 메모
 */

const formSchema = z.object({
  cost: z.string(),
  paidAt: z.date(),
  smallCategoryPk: z.string(),
  startedHour: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return numberValue >= 0 && numberValue <= 23;
  }),
  startedMin: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return numberValue >= 0 && numberValue <= 59;
  }),
  endHour: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return numberValue >= 0 && numberValue <= 23;
  }),
  endMin: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return numberValue >= 0 && numberValue <= 59;
  }),
  memo: z.string().optional(),
});

export type SpendingFormDataType = z.infer<typeof formSchema>;

const CreateSpendingPage = () => {
  const form = useForm<SpendingFormDataType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cost: '',
      smallCategoryPk: '',
    }, // zod validater 통합
  });

  const LeftHeader = () => {
    return (
      <Button variant={'ghost'} className="p-0">
        <Link href={'/user-info'}>
          <Icon name="arrow-left" size={25} />
        </Link>
      </Button>
    );
  };

  const onSave = () => {
    console.log('save');
  };

  const RightHeader = () => {
    return (
      <Button variant={'ghost'} className="p-0" onClick={onSave} disabled={!form.formState.isValid}>
        다음
      </Button>
    );
  };

  return (
    <PageLayout isPadding>
      <Header left={<LeftHeader />} right={<RightHeader />} />
      <CreateSpendingForm form={form} />
    </PageLayout>
  );
};

export default CreateSpendingPage;
