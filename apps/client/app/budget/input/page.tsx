'use client';

import BudgetDescription from '@/src/widgets/budget/input/BudgetDescription';
import BudgetInput from '@/src/widgets/budget/input/BudgetInput';
import { useState } from 'react';

export default function BudgetInputPage() {
  const [budget, setBudget] = useState(0);

  // TODO
  const saveBudget = () => {
    // api
  };

  const backHistory = () => {
    //
  };

  return (
    <main className="h-full">
      {/* TODO - Header로 바꿀 예정 */}
      <header className="h-[56px]">Header</header>
      <BudgetDescription />
      <BudgetInput budget={budget} onChange={setBudget} />
    </main>
  );
}
