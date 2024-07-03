import { axiosInstance } from '../config/axios';
import { WeddingInfo } from '../types/wedding';

export const getWeddingInfo = async () => {
  const { data } = await axiosInstance.get<WeddingInfo>('/wedding');

  return data;
};

export const updateTotalBudget = async (totalBudget: number) => {
  await axiosInstance.put('/totalBudget', {
    totalBudget,
  });
};
