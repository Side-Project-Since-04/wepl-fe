import { axiosInstance } from '../config/axios';
import { WeddingBudgetInfoType, WeddingInfoType } from '@fsd/features/wedding/types';

const URL_ROOT = '/wedding';

export const WeddingClient = {
  getWeddingInfo: async (): Promise<WeddingInfoType & WeddingBudgetInfoType> => {
    const { data } = await axiosInstance.get(URL_ROOT);

    return data;
  },
  createWeddingInfo: async (formData: WeddingInfoType) => {
    return await axiosInstance.post(URL_ROOT, { ...formData });
  },
  update: async (formData: WeddingInfoType) => {
    return await axiosInstance.put(URL_ROOT, { ...formData });
  },
  updateTotalBudget: async (totalBudget: number) => {
    await axiosInstance.put(URL_ROOT + '/total-budget', {
      totalBudget,
    });
  },
};
