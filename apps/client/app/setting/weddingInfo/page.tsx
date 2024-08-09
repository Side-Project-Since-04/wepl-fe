'use client';

// @wepl/ui
import { Button } from '@ui/src/Button';
import { HeadLine5 } from '@ui/src/components/HeadLine';

//third-party
import { format } from 'date-fns';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import type { WeddingFormData } from '@/src/widgets/wedding/WeddingInfoForm';
import { weddingFormSchema, WeddingInfoForm } from '@/src/widgets/wedding/WeddingInfoForm';
import { useSuspenseGetWeddingInfo, useUpdateWeddingInfo } from '@/src/features/wedding/queries';
import { classNames } from '@/src/shared/ui/utils';
import BackHeader from '@/src/shared/components/BackHeader';

const SettingWeddingInfoPage = () => {
  const { data: weddingInfo } = useSuspenseGetWeddingInfo();
  const { mutate: updateWeddingInfo, isPending: isPendingWeddingInfo } = useUpdateWeddingInfo();

  const form = useForm<WeddingFormData>({
    resolver: zodResolver(weddingFormSchema), // zod validater 통합
    defaultValues: {
      weddingHall: weddingInfo.weddingHall || '',
      weddingDate: weddingInfo.weddingDate ? new Date(weddingInfo.weddingDate) : undefined,
      hour: weddingInfo.weddingTime.replace(/:\d+/, '') || '',
      min: weddingInfo.weddingTime.replace(/\d+:/, '') || '',
    },
  });

  const handleSaveBtn = () => {
    const { weddingHall, weddingDate, hour, min } = form.getValues();
    const formData = {
      weddingHall,
      weddingDate: format(weddingDate, 'yyyy-MM-dd'),
      weddingTime: `${hour}:${min}`,
    };

    updateWeddingInfo(formData);
  };

  return (
    <main>
      <BackHeader
        right={
          <Button
            className="p-0"
            disabled={!form.formState.isValid || isPendingWeddingInfo}
            onClick={handleSaveBtn}
            variant="ghost"
          >
            저장
          </Button>
        }
      />
      <div className={`pt-5 flex flex-col gap-16 ${classNames.pagePadding}`}>
        <HeadLine5>웨딩홀 정보를 입력해주세요.</HeadLine5>
        <WeddingInfoForm form={form} />
      </div>
    </main>
  );
};

export default SettingWeddingInfoPage;
