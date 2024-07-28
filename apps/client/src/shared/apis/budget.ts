import type { BudgetType } from '@fsd/features/budget/types';
import { axiosInstance } from '../config/axios';

const URL_ROOT = '/budget';

export const BudgetClient = {
  getBudget: async () => {
    const { data } = await axiosInstance.get<BudgetType[]>(URL_ROOT);

    return data;
  },
  updateBudget: async (budget: BudgetType) => {
    await axiosInstance.put(URL_ROOT, budget);
  },
};
