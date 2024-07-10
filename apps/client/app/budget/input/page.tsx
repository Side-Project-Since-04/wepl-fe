'use client';

import BudgetDescription from '@/src/widgets/budget/input/BudgetDescription';
import BudgetInput from '@/src/widgets/budget/input/BudgetInput';
import { useToast } from '@ui/src/Toast';
import { useState } from 'react';
import BudgetHeader from '@/src/widgets/budget/common/BudgetHeader';
import { useMutation } from '@tanstack/react-query';
import { WeddingClient } from '@/src/shared/apis/wedding';

export default function BudgetInputPage() {
  const [budget, setBudget] = useState(0);
  const { toast } = useToast();

  const isEnabledSave = budget > 0;

  const { mutate: mutateForUpdateTotalBudget } = useMutation({
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

  return (
    <main className="h-full">
      <BudgetHeader isEnableSave={isEnabledSave} onSave={() => saveBudget(budget)} />
      <section>
        <BudgetDescription />
      </section>
      <section className="mt-40">
        <BudgetInput budget={budget} onChange={setBudget} />
      </section>
    </main>
  );
}
