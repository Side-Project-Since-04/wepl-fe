'use client';

import { QueryClient, useMutation } from '@tanstack/react-query';
import { useToast } from '@ui/src/Toast';
import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { SubTitle1 } from '@ui/src/components/Text';
import { BudgetClient } from '@/src/shared/apis/budget';
import BackHeader from '@/src/shared/components/BackHeader';
import { CLASSIFICATIONS } from '@/src/features/category/constants';
import { type ClassificationNameType } from '@/src/features/category/types';
import BudgetHeader from '@/src/widgets/budget/common/BudgetHeader';
import BudgetInput from '@/src/widgets/budget/input/BudgetInput';
import { BudgetListDetailDescription } from '@/src/widgets/budget/list-detail/BudgetListDetailDescription';
import type { BudgetType } from '@/src/features/budget/types';
import { BudgetKeys } from '@/src/features/budget/queries';
import { classNames } from '@/src/shared/ui/utils';
import type { ApiErrorType } from '@/src/features/common/types';

interface BudgetListDetailPageProps {
  params: {
    classification: Lowercase<ClassificationNameType>;
  };
}

const VALID_CLASSIFICATION = CLASSIFICATIONS.map(({ name }) => name);

const BudgetListDetailPage = ({ params }: BudgetListDetailPageProps) => {
  const [classificationBudget, setClassificationBudget] = useState(0);
  const { toast } = useToast();
  const searchParams = useSearchParams();

  const { isPending: isPendingUpdateBudget, mutate: mutateUpdateBudget } = useMutation({
    mutationFn: (budget: BudgetType) => BudgetClient.updateBudget(budget),
  });

  const order = searchParams?.get('order') || '?';
  const isEnableSave = classificationBudget > 0 && !isPendingUpdateBudget;
  const classificationName = (params.classification.toUpperCase() || '') as ClassificationNameType;
  const isValidClassification = VALID_CLASSIFICATION.includes(classificationName);

  const handleSave = (budgetAmount: number) => {
    mutateUpdateBudget(
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
        onError: (error) => {
          const apiError = error as ApiErrorType;

          toast({
            variant: 'alert',
            title: apiError.message,
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
        const budgets = await queryClient.fetchQuery(BudgetKeys.getBudget);

        const budget = budgets.filter((value) => value.classificationName === classificationName)[0].amount;
        setClassificationBudget(budget);
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
      <main>
        <BackHeader />
        <section className={classNames.pagePadding}>
          <SubTitle1>잘못된 접근입니다.</SubTitle1>
        </section>
      </main>
    );
  }

  return (
    <main>
      <BudgetHeader
        isEnableSave={isEnableSave}
        onSave={() => {
          handleSave(classificationBudget);
        }}
      />
      <section className={classNames.pagePadding}>
        <section className="py-16">
          <BudgetListDetailDescription
            classification={params.classification.toUpperCase() as ClassificationNameType}
            order={order}
          />
        </section>
        <section>
          <BudgetInput budget={classificationBudget} onChange={setClassificationBudget} />
        </section>
      </section>
    </main>
  );
};

export default BudgetListDetailPage;
