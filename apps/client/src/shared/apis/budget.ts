import { axiosInstance } from '../config/axios';
import { Budget } from '@fsd/features/budget/types';

const URL_ROOT = '/budget';

export const BudgetClient = {
  getBudget: async () => {
    const { data } = await axiosInstance.get<Budget[]>(URL_ROOT);

    return data;
  },
  updateBudget: async (budget: Budget) => {
    await axiosInstance.put(URL_ROOT, budget);
  },
};
