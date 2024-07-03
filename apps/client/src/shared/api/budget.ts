import { axiosInstance } from '../config/axios';
import { Budget } from '../types/budget';

export const getBudget = async () => {
  const { data } = await axiosInstance.get<Budget[]>('/budget');

  return data;
};

export const updateBudget = async (budget: Budget) => {
  await axiosInstance.put('/budget', budget);
};
