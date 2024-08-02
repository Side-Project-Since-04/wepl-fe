'use client';
import React from 'react';

import Header from '@ui/src/components/Header';
import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import { useRouter } from 'next/navigation';
import { useCallback } from 'react';
import PageLayout from '@/src/pages/PageLayout';
import SpendingForm from '@/src/widgets/spending/SpendingForm';

import { useCreateSpendingForm } from '@/src/features/spending/hooks/useCreateSpendingForm';
import useInitValue from '@/src/features/spending/hooks/useSpendingFormInit';

const CreateSmallCategorySpendingPage = ({
  params,
}: {
  params: { classification: string; smallCategoryPk: string };
}) => {
  const { form, handleSubmit } = useCreateSpendingForm(params.smallCategoryPk);
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
        onClick={() => handleSubmit(form.getValues())}
        disabled={!form.formState.isValid || form.formState.isSubmitting}
        variant="ghost"
      >
        저장
      </Button>
    );
  }, [form]);

  return (
    <PageLayout isPadding>
      <Header left={<LeftHeader />} center={<CenterHeader />} right={<RightHeader />} />
      <SpendingForm form={form} onSave={form.handleSubmit(handleSubmit)} initValues={initValue} />
    </PageLayout>
  );
};

export default CreateSmallCategorySpendingPage;
