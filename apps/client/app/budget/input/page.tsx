'use client';

import BudgetDescription from '@/src/widgets/budget/input/BudgetDescription';
import BudgetInput from '@/src/widgets/budget/input/BudgetInput';
import { useToast } from '../../../../../packages/ui/src/Toast';
import { useState } from 'react';

export default function BudgetInputPage() {
  const [budget, setBudget] = useState(0);
  const { toast } = useToast();

  // TODO
  const saveBudget = () => {
    // api

    toast({
      variant: 'success',
      title: '저장되었습니다.',
    });
  };

  const backHistory = () => {
    //
  };

  return (
    <main className="h-full">
      {/* TODO - Header로 바꿀 예정 */}
      <header className="h-[56px] text-button-md" onClick={saveBudget}>
        저장 (임시)
      </header>
      <BudgetDescription />
      <BudgetInput budget={budget} onChange={setBudget} />
    </main>
  );
}
