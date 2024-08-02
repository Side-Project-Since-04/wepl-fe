'use client';
import React from 'react';
import Link from 'next/link';

// @wepl/ui
import { Header } from '@ui/src/components/Header';
import { Button } from '@ui/src/Button';
import { HeadLine5 } from '@ui/src/components/HeadLine';

// third-party
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import Icon from '@ui/src/Icon';
import { useRouter } from 'next/navigation';
import { useCreateWeddingInfo } from '@/src/features/wedding/queries';
import PageLayout from '@/src/pages/PageLayout';
import { WeddingInfoForm } from '@/src/widgets/wedding/WeddingInfoForm';

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
    resolver: zodResolver(formSchema),
    defaultValues: {
      weddingHall: '',
      hour: '',
      min: '',
    },
  });

  const handleSaveBtn = () => {
    const { weddingHall, weddingDate, hour, min } = form.getValues();
    const formData = {
      weddingHall,
      weddingDate: format(weddingDate, 'yyyy-MM-dd'),
      weddingTime: `${hour}:${min}`,
    };

    mutate(formData);
  };

  return (
    <PageLayout isPadding>
      <Header
        left={<LeftHeader />}
        right={<RightHeader isFormValid={form.formState.isValid} onSave={handleSaveBtn} />}
      />
      <div className="pt-5 flex flex-col gap-[16px]">
        <HeadLine5>웨딩홀 정보를 입력해주세요.</HeadLine5>
        <WeddingInfoForm form={form} />
      </div>
    </PageLayout>
  );
};

export default WeddingInfoPage;

const RightHeader = ({ onSave, isFormValid }: { onSave: () => void; isFormValid: boolean }) => {
  return (
    <Button className="p-0" disabled={!isFormValid} onClick={onSave} variant="ghost">
      <Link className="text-lg" href="/invite">
        다음
      </Link>
    </Button>
  );
};

const LeftHeader = () => {
  const router = useRouter();

  return (
    <Button
      className="p-0"
      onClick={() => {
        router.back();
      }}
      variant="ghost"
    >
      <Link href="/user-info">
        <Icon name="arrow-left" size={25} />
      </Link>
    </Button>
  );
};
