'use client';

import BudgetDescription from '@/src/widgets/budget/input/BudgetDescription';
import BudgetInput from '@/src/widgets/budget/input/BudgetInput';
import { useToast } from '../../../../../packages/ui/src/Toast';
import { useState } from 'react';
import BackHeader from '@/src/shared/components/BackHeader';
import { cn } from '@ui/lib/utils';

export default function BudgetInputPage() {
  const [budget, setBudget] = useState(0);
  const { toast } = useToast();

  const isEnabled = budget > 0;

  // TODO
  const saveBudget = () => {
    // api

    toast({
      variant: 'success',
      title: '저장되었습니다.',
    });
  };

  const RightHeader = () => {
    return (
      <button
        className={cn('text-button-lg', isEnabled ? 'text-primary-500' : 'text-gray-300')}
        disabled={!isEnabled}
        onClick={saveBudget}
      >
        저장
      </button>
    );
  };

  return (
    <main className="h-full">
      <BackHeader right={<RightHeader />} />
      <BudgetDescription />
      <BudgetInput budget={budget} onChange={setBudget} />
    </main>
  );
}
