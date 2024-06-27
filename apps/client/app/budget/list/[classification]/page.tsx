'use client';

import BackHeader from '@/src/shared/components/BackHeader';
import { CLASSIFICATION } from '@/src/shared/constants/classification';
import { type Classification } from '@/src/shared/types/classification';
import BudgetHeader from '@/src/widgets/budget/common/BudgetHeader';
import BudgetInput from '@/src/widgets/budget/input/BudgetInput';
import BudgetListDetailDescription from '@/src/widgets/budget/list-detail/BudgetListDetailDescription';
import { useToast } from '@wepl/ui/Toast';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

interface BudgetListDetailPage {
  params: {
    classification: Lowercase<Classification>;
  };
}

const VALID_CLASSIFICATION = CLASSIFICATION.map(({ type }) => type.toLowerCase());

export default function BudgetListDetailPage({ params }: BudgetListDetailPage) {
  const [budget, setBudget] = useState(0);
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const order = searchParams.get('order') || '?';

  const isEnableSave = budget > 0;

  const isValidClassification = VALID_CLASSIFICATION.includes(params.classification);

  // TODO: Toast 띄우고 API 호출 ?
  const handleSave = () => {
    toast({
      variant: 'success',
      title: 'hi',
      duration: 2000,
    });
  };

  if (!isValidClassification) {
    return (
      <main>
        <BackHeader />
        <div>올바르지 않은 대분류 항목입니다.</div>
      </main>
    );
  }

  return (
    <main>
      <BudgetHeader isEnableSave={isEnableSave} onSave={handleSave} />
      <section className="py-16">
        <BudgetListDetailDescription classification={params.classification} order={order} />
      </section>
      <section>
        <BudgetInput budget={budget} onChange={setBudget} />
      </section>
    </main>
  );
}
