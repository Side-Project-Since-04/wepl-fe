'use client';

import Link from 'next/link';

// @wepl/ui
import Header from '@ui/src/components/Header';
import { Button } from '@ui/src/Button';
import { HeadLine5 } from '@ui/src/components/HeadLine';

//third-party
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Icon from '@ui/src/Icon';
import { useCallback } from 'react';
import type { WeddingFormData } from '@/src/widgets/wedding/WeddingInfoForm';
import { weddingFormSchema, WeddingInfoForm } from '@/src/widgets/wedding/WeddingInfoForm';
import { useCreateWeddingInfo } from '@/src/features/wedding/queries';
import { classNames } from '@/src/shared/ui/utils';

const WeddingInfoPage = () => {
  const { mutate } = useCreateWeddingInfo();

  const form = useForm<WeddingFormData>({
    resolver: zodResolver(weddingFormSchema), // zod validater 통합
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

  const LeftHeader = useCallback(() => {
    return (
      <Button className="p-0" variant="ghost">
        <Link href="/user-info">
          <Icon name="arrow-left" size={25} />
        </Link>
      </Button>
    );
  }, []);

  const RightHeader = useCallback(() => {
    return (
      <Button className="p-0" disabled={!form.formState.isValid} onClick={handleSaveBtn} variant="ghost">
        <Link className="text-lg" href="/invite">
          다음
        </Link>
      </Button>
    );
  }, [form]);

  return (
    <main>
      <Header left={<LeftHeader />} right={<RightHeader />} />
      <div className={`pt-5 flex flex-col gap-16 ${classNames.pagePadding}`}>
        <HeadLine5>웨딩홀 정보를 입력해주세요.</HeadLine5>
        <WeddingInfoForm form={form} />
      </div>
    </main>
  );
};

export default WeddingInfoPage;
