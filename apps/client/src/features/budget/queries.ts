import { budgetClient } from '@/src/shared/api/budget';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { Budget } from './types';

export const BudgetKeys = createQueryKeys('budget', {
  getBudget: () => ({
    queryKey: ['get'],
    queryFn: () => budgetClient.getBudget(),
  }),
  updateBudget: (budget: Budget) => ({
    queryKey: [budget],
    queryFn: () => budgetClient.updateBudget(budget),
  }),
});
