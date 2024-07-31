'use client';
import React from 'react';
import Link from 'next/link';

import Header from '@ui/src/components/Header';
import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import PageLayout from '@/src/pages/PageLayout';
import SpendingForm from '@/src/widgets/spending/SpendingForm';
import { useSpendingStore } from '@/src/features/spending/store';

import { useCreateSpendingForm } from '@/src/features/spending/hooks/useCreateSpendingForm';
import { extractTimeFromISOString } from '@/src/shared/utils/date-utils';
import useInitValue from '@/src/features/spending/hooks/useSpendingFormInit';

const CreateSmallCategorySpendingPage = ({
  params,
}: {
  params: { classification: string; smallCategoryPk: string };
}) => {
  const { form, handleSubmit } = useCreateSpendingForm(params.smallCategoryPk);
  const initValue = useInitValue();

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
        onClick={() => handleSubmit(form.getValues())}
        disabled={!form.formState.isValid || form.formState.isSubmitting}
      >
        저장
      </Button>
    );
  };

  return (
    <PageLayout isPadding>
      <Header left={<LeftHeader />} center={<CenterHeader />} right={<RightHeader />} />
      <SpendingForm form={form} onSave={form.handleSubmit(handleSubmit)} initValues={initValue} />
    </PageLayout>
  );
};

export default CreateSmallCategorySpendingPage;
