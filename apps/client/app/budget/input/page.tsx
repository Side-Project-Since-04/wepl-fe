'use client';

import BudgetDescription from '@/src/widgets/budget/input/BudgetDescription';
import BudgetInput from '@/src/widgets/budget/input/BudgetInput';
import { useToast } from '@ui/src/Toast';
import { useState } from 'react';
import BudgetHeader from '@/src/widgets/budget/common/BudgetHeader';
import { useMutation } from '@tanstack/react-query';
import { WeddingClient } from '@/src/shared/apis/wedding';
import PageLayout from '@/src/pages/PageLayout';
import { classNames } from '@/src/shared/ui/utils';

export default function BudgetInputPage() {
  const [budget, setBudget] = useState(0);
  const { toast } = useToast();

  const { isPending: isPendingUpdateTotalBudget, mutate: mutateForUpdateTotalBudget } = useMutation({
    mutationFn: (budget: number) => WeddingClient.updateTotalBudget(budget),
  });

  const saveBudget = async (budget: number) => {
    await mutateForUpdateTotalBudget(budget, {
      onSuccess: () => {
        toast({
          variant: 'success',
          title: '저장되었습니다',
          duration: 1500,
        });
      },
      onError: () => {
        toast({
          variant: 'alert',
          title: '저장을 실패했습니다',
          duration: 1500,
        });
      },
    });
  };

  const isEnabledSave = budget > 0 && !isPendingUpdateTotalBudget;

  return (
    <PageLayout className="h-full">
      <BudgetHeader isEnableSave={isEnabledSave} onSave={() => saveBudget(budget)} />
      <section className={classNames.pagePadding}>
        <section>
          <BudgetDescription />
        </section>
        <section className="mt-40">
          <BudgetInput budget={budget} onChange={setBudget} />
        </section>
      </section>
    </PageLayout>
  );
}
