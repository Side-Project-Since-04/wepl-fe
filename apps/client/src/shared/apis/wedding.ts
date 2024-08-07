import type { WeddingBudgetInfoType, WeddingInfoType } from '@fsd/features/wedding/types';
import { axiosInstance } from '../config/axios';

const URL_ROOT = '/wedding';

export const WeddingClient = {
  getWeddingInfo: async () => {
    const { data } = await axiosInstance.get<WeddingInfoType & WeddingBudgetInfoType>(URL_ROOT);

    return data;
  },
  createWeddingInfo: async (formData: WeddingInfoType) => {
    await axiosInstance.post(URL_ROOT, { ...formData });
  },
  updateWeddingInfo: async (formData: WeddingInfoType) => {
    await axiosInstance.put(URL_ROOT, { ...formData });
  },
  updateTotalBudget: async (totalBudget: number) => {
    await axiosInstance.put(`${URL_ROOT}/total-budget`, {
      totalBudget,
    });
  },
};
