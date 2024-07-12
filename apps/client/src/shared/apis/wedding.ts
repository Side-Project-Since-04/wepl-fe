import { axiosInstance } from '../config/axios';
import { WeddingBudgetInfoType, WeddingInfoType } from '../types/wedding';

const URL_ROOT = '/wedding';

export const WeddingClient = {
  getWeddingInfo: async (): Promise<WeddingInfoType | WeddingBudgetInfoType> => {
    return await axiosInstance.get(URL_ROOT);
  },
  createWeddingInfo: async (formData: WeddingInfoType) => {
    return await axiosInstance.post(URL_ROOT, { ...formData });
  },
  update: async (formData: WeddingInfoType) => {
    return await axiosInstance.put(URL_ROOT, { ...formData });
  },
  updateTotalBudget: async (totalBudget: number) => {
    await axiosInstance.put('/totalBudget', {
      totalBudget,
    });
  },
};
