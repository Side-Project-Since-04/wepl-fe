import { BudgetClient } from '@/src/shared/apis/budget';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { Budget } from './types';

export const BudgetKeys = createQueryKeys('budget', {
  getBudget: () => ({
    queryKey: ['get'],
    queryFn: () => BudgetClient.getBudget(),
  }),
  updateBudget: (budget: Budget) => ({
    queryKey: [budget],
    queryFn: () => BudgetClient.updateBudget(budget),
  }),
});
