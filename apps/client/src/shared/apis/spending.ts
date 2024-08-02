import { SpendingDataType } from '@/src/features/spending/types';
import { axiosInstance } from '../config/axios';

const URL_ROOT = '/spending';

export const SpendingClient = {
  createSpending: async (spendingInput: Partial<SpendingDataType>) => {
    await axiosInstance.post(URL_ROOT, spendingInput);
  },
  deleteSpending: async (spendingPk: string) => {
    await axiosInstance.delete(`${URL_ROOT}/${spendingPk}`);
  },
  updateSpending: async ({ spendingPk, spending }: { spendingPk: string; spending: SpendingDataType }) => {
    await axiosInstance.patch(`${URL_ROOT}/${spendingPk}`, spending);
  },
  deleteSpendingSchedule: async (spendingPk: string) => {
    await axiosInstance.delete(`${URL_ROOT}/${spendingPk}`);
  },
};
