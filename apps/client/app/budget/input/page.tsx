'use client';

import { useToast } from '@ui/src/Toast';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import BudgetDescription from '@/src/widgets/budget/input/BudgetDescription';
import BudgetInput from '@/src/widgets/budget/input/BudgetInput';
import BudgetHeader from '@/src/widgets/budget/common/BudgetHeader';
import { WeddingClient } from '@/src/shared/apis/wedding';
import PageLayout from '@/src/pages/PageLayout';
import { classNames } from '@/src/shared/ui/utils';
import { useGetWeddingInfo } from '@/src/features/wedding/queries';

const BudgetInputPage = () => {
  const router = useRouter();
  const { toast } = useToast();

  const { data: weddingInfo } = useGetWeddingInfo();
  const [budgetAmount, setBudgetAmount] = useState(weddingInfo?.totalBudget || 0);

  const { isPending: isPendingUpdateTotalBudget, mutate: mutateForUpdateTotalBudget } = useMutation({
    mutationFn: (budget: number) => WeddingClient.updateTotalBudget(budget),
  });

  const saveBudget = (budget: number) => {
    mutateForUpdateTotalBudget(budget, {
      onSuccess: () => {
        toast({
          variant: 'success',
          title: '저장되었습니다',
          duration: 1500,
        });
        router.back();
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

  const isEnabledSave = budgetAmount > 0 && !isPendingUpdateTotalBudget;

  return (
    <PageLayout className="h-full">
      <BudgetHeader
        isEnableSave={isEnabledSave}
        onSave={() => {
          saveBudget(budgetAmount);
        }}
      />
      <section className={classNames.pagePadding}>
        <section>
          <BudgetDescription />
        </section>
        <section className="mt-40">
          <BudgetInput budget={budgetAmount} onChange={setBudgetAmount} />
        </section>
      </section>
    </PageLayout>
  );
};

export default BudgetInputPage;
