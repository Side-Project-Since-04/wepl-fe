import type { SpendingInputType } from '@/src/features/spending/types';
import { axiosInstance } from '../config/axios';

const URL_ROOT = '/spending';

export const SpendingClient = {
  createSpending: async (spendingInput: Partial<SpendingInputType>) => {
    await axiosInstance.post(URL_ROOT, spendingInput);
  },
  deleteSpending: async (spendingPk: string) => {
    await axiosInstance.delete(`${URL_ROOT}/${spendingPk}`);
  },
  updateSpending: async ({ spendingPk, spending }: { spendingPk: string; spending: SpendingInputType }) => {
    await axiosInstance.patch(`${URL_ROOT}/${spendingPk}`, spending);
  },
  deleteSpendingSchedule: async (spendingPk: string) => {
    await axiosInstance.delete(`${URL_ROOT}/${spendingPk}`);
  },
};
