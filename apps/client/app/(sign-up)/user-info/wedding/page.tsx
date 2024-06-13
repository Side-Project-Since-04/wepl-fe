'use client';
import React, { useState } from 'react';
import Link from 'next/link';

// @wepl/ui
import Header from '@wepl/ui/components/Header/index.tsx';
import { Button } from '@wepl/ui/Button.tsx';
import { HeadLine5 } from '@wepl/ui/components/HeadLine/index.tsx';

//third-party
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { WeddingInfoForm } from '@/src/features/auth/wedding_info_form/WeddingInfoForm';

const formSchema = z.object({
  wedding_date: z.date(),
  wedding_hole: z.string(),
  time: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return numberValue >= 0 && numberValue <= 23;
  }),
  min: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return numberValue >= 0 && numberValue <= 59;
  }),
});

export type WeddingFormData = z.infer<typeof formSchema>;

const WeddingInfoPage = () => {
  // schema 생성

  const form = useForm<WeddingFormData>({
    resolver: zodResolver(formSchema), // zod validater 통합
    defaultValues: {
      wedding_hole: '',
      time: '',
      min: '',
    },
  });
  const onSave = () => {
    console.log(form.getValues());
  };

  const LeftHeader = () => {
    return (
      <Button variant={'ghost'} className="p-0">
        <Link href={'/user-info'}>
          <img src="/left_arrow.svg" />
        </Link>
      </Button>
    );
  };

  const RightHeader = () => {
    return (
      <Button variant={'ghost'} className="p-0" onClick={onSave} disabled={!form.formState.isValid}>
        <Link href={'/invite'} className="text-lg" onClick={onSave}>
          다음
        </Link>
      </Button>
    );
  };

  return (
    <>
      <Header left={<LeftHeader />} right={<RightHeader />} />
      <div className="pt-5 flex flex-col gap-[16px]">
        <HeadLine5>웨딩홀 정보를 입력해주세요.</HeadLine5>
        <WeddingInfoForm form={form} />
      </div>
    </>
  );
};

export default WeddingInfoPage;
