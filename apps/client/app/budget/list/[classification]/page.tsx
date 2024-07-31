'use client';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useToast } from '@ui/src/Toast';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { SubTitle1 } from '@ui/src/components/Text';
import { produce } from 'immer';
import { BudgetClient } from '@/src/shared/apis/budget';
import BackHeader from '@/src/shared/components/BackHeader';
import { CLASSIFICATIONS } from '@/src/features/category/constants';
import type { ClassificationType, ClassificationNameType } from '@/src/features/category/types';
import BudgetHeader from '@/src/widgets/budget/common/BudgetHeader';
import BudgetInput from '@/src/widgets/budget/input/BudgetInput';
import { BudgetListDetailDescription } from '@/src/widgets/budget/list-detail/BudgetListDetailDescription';
import type { BudgetType } from '@/src/features/budget/types';
import { classNames } from '@/src/shared/ui/utils';
import type { ApiErrorType, Pageable } from '@/src/features/common/types';
import { CategoryKeys, useSuspenseGetClassifications } from '@/src/features/category/queries';

interface BudgetListDetailPageProps {
  params: {
    classification: Lowercase<ClassificationNameType>;
  };
}

const VALID_CLASSIFICATION = CLASSIFICATIONS.map(({ name }) => name);

const BudgetListDetailPage = ({ params }: BudgetListDetailPageProps) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { toast } = useToast();

  const { data: classifications } = useSuspenseGetClassifications();
  const { isPending: isPendingUpdateBudget, mutate: mutateUpdateBudget } = useMutation({
    mutationFn: (budget: BudgetType) => BudgetClient.updateBudget(budget),
  });

  const classificationName = (params.classification.toUpperCase() || '') as ClassificationNameType;
  const isValidClassification = VALID_CLASSIFICATION.includes(classificationName);

  const defaultBudget = classifications.content.filter((value) => value.name === classificationName)[0].budget;
  const [classificationBudget, setClassificationBudget] = useState(defaultBudget || 0);

  const isEnableSave = classificationBudget > 0 && !isPendingUpdateBudget;
  const order = searchParams?.get('order') || '?';

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

          /**
           * 변경된 금액을 서버 State에 반영
           */
          queryClient.setQueryData<Pageable<ClassificationType>>(CategoryKeys.getClassifications.queryKey, (prev) => {
            if (prev) {
              return produce(prev, (draft) => {
                const found = draft.content.filter((classification) => classification.name === classificationName);
                found[0].budget = budgetAmount;
              });
            }
          });

          router.back();
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
