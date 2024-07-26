import { createQueryKeys } from '@lukemorales/query-key-factory';
import { BudgetClient } from '@/src/shared/apis/budget';
import type { BudgetType } from './types';

export const BudgetKeys = createQueryKeys('budget', {
  getBudget: {
    queryKey: null,
    queryFn: () => BudgetClient.getBudget(),
  },
  updateBudget: (budget: BudgetType) => ({
    queryKey: [budget],
    queryFn: () => BudgetClient.updateBudget(budget),
  }),
});
