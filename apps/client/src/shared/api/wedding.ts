import { axiosInstance } from '../config/axios';

export const weddingClient = {
  updateTotalBudget: async (totalBudget: number) => {
    await axiosInstance.put('/totalBudget', {
      totalBudget,
    });
  },
};
