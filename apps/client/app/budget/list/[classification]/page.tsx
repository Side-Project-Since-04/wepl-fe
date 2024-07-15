'use client';

import { queries } from '@/src/features/common/queries';
import { BudgetClient } from '@/src/shared/apis/budget';
import BackHeader from '@/src/shared/components/BackHeader';
import { CLASSIFICATION } from '@/src/features/category/constants';
import { type ClassificationName } from '@/src/features/category/types';
import BudgetHeader from '@/src/widgets/budget/common/BudgetHeader';
import BudgetInput from '@/src/widgets/budget/input/BudgetInput';
import BudgetListDetailDescription from '@/src/widgets/budget/list-detail/BudgetListDetailDescription';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { useToast } from '@ui/src/Toast';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { Budget } from '@/src/features/budget/types';
import PageLayout from '@/src/pages/PageLayout';

interface BudgetListDetailPage {
  params: {
    classification: Lowercase<ClassificationName>;
  };
}

const VALID_CLASSIFICATION = CLASSIFICATION.map(({ name }) => name);

export default function BudgetListDetailPage({ params }: BudgetListDetailPage) {
  const [budget, setBudget] = useState(0);
  const { toast } = useToast();
  const searchParams = useSearchParams();
  const order = searchParams?.get('order') || '?';

  const isEnableSave = budget > 0;
  const classificationName = (params.classification?.toUpperCase() || '') as ClassificationName;
  const isValidClassification = VALID_CLASSIFICATION.includes(classificationName);

  const { mutate: mutateForUpdateBudget } = useMutation({
    mutationKey: [queries.wedding.updateTotalBudget],
    mutationFn: (budget: Budget) => BudgetClient.updateBudget(budget),
  });

  const handleSave = async (budgetAmount: number) => {
    await mutateForUpdateBudget(
      {
        classificationName,
        amount: budgetAmount,
      },
      {
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
            title: '오류가 발생했습니다',
            duration: 1500,
          });
        },
      },
    );
  };

  useEffect(() => {
    const fetchBudget = async () => {
      const queryClient = new QueryClient();

      try {
        const budgets = await queryClient.fetchQuery(queries.budget.getBudget());

        const budget = budgets.filter((value) => value.classificationName === classificationName)[0].amount;
        setBudget(budget);
      } catch (e) {
        console.warn(e);
      }
    };

    if (isValidClassification) {
      fetchBudget();
    }
  }, [classificationName, isValidClassification]);

  if (!isValidClassification) {
    return (
      <PageLayout isPadding>
        <BackHeader />
        <div>올바르지 않은 대분류 항목입니다.</div>
      </PageLayout>
    );
  }

  return (
    <PageLayout isPadding>
      <BudgetHeader isEnableSave={isEnableSave} onSave={() => handleSave(budget)} />
      <section className="py-16">
        <BudgetListDetailDescription
          classification={params.classification.toUpperCase() as ClassificationName}
          order={order}
        />
      </section>
      <section>
        <BudgetInput budget={budget} onChange={setBudget} />
      </section>
    </PageLayout>
  );
}
