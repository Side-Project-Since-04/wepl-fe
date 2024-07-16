'use client';
import React, { useState } from 'react';
import Link from 'next/link';

// @wepl/ui
import Header from '@ui/src/components/Header';
import { Button } from '@ui/src/Button';
import { HeadLine5 } from '@ui/src/components/HeadLine';

//third-party
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { WeddingInfoForm } from '@/src/widgets/wedding/WeddingInfoForm';
import { useCreateWeddingInfo } from '@/src/features/wedding/queries';
import Icon from '@ui/src/Icon';

const formSchema = z.object({
  weddingDate: z.date(),
  weddingHall: z.string().max(15),
  hour: z.union([z.string(), z.number()]).refine((value) => {
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
  const { mutate } = useCreateWeddingInfo();

  const form = useForm<WeddingFormData>({
    resolver: zodResolver(formSchema), // zod validater 통합
    defaultValues: {
      weddingHall: '',
      hour: '',
      min: '',
    },
  });

  const onSave = () => {
    const { weddingHall, weddingDate, hour, min } = form.getValues();
    const formData = {
      weddingHall,
      weddingDate: format(weddingDate, 'yyyy-MM-dd'),
      weddingTime: `${hour}:${min}`,
    };

    mutate(formData);
  };

  const LeftHeader = () => {
    return (
      <Button variant={'ghost'} className="p-0">
        <Link href={'/user-info'}>
          <Icon name="arrow-left" size={25} />
        </Link>
      </Button>
    );
  };

  const RightHeader = () => {
    return (
      <Button variant={'ghost'} className="p-0" onClick={onSave} disabled={!form.formState.isValid}>
        <Link href={'/invite'} className="text-lg">
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
