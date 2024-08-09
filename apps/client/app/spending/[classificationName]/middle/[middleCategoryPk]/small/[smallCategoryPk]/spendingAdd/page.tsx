'use client';

import React, { useCallback, useEffect } from 'react';
import Header from '@ui/src/components/Header';
import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import { useRouter } from 'next/navigation';
import SpendingForm from '@/src/widgets/spending/SpendingForm';
import { useInitValue } from '@/src/features/spending/hooks/useSpendingFormInit';
import { useSpendingStore } from '@/src/features/spending/store';
import { classNames } from '@/src/shared/ui/utils';
import { useCreateSpendingForm } from '@/src/features/spending/hooks/useSpendingForm';

interface SpendingAddPageProps {
  params: { classification: string; smallCategoryPk: string };
}

const SpendingAddPage = ({ params }: SpendingAddPageProps) => {
  const { form, handleSubmit, isSubmitting } = useCreateSpendingForm(params.smallCategoryPk);

  console.log(isSubmitting);

  const { setSpendingItem } = useSpendingStore();
  const initValue = useInitValue();
  const router = useRouter();

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
        disabled={isSubmitting || !form.formState.isValid}
        onClick={() => {
          handleSubmit(form.getValues());
        }}
        variant="ghost"
      >
        저장
      </Button>
    );
  }, [form, isSubmitting]);

  /**
   * 페이지를 떠날 때,
   * SpendingItem을 undefined로 설정
   */
  useEffect(() => {
    return () => {
      setSpendingItem(undefined);
    };
  }, []);

  return (
    <main>
      <Header center={<CenterHeader />} left={<LeftHeader />} right={<RightHeader />} />
      <section className={`py-24 ${classNames.pagePadding}`}>
        <SpendingForm form={form} initValues={initValue} onSave={() => form.handleSubmit(handleSubmit)} />
      </section>
    </main>
  );
};

export default SpendingAddPage;
