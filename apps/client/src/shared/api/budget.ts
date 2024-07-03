import { axiosInstance } from '../config/axios';

export const getBudget = async () => {
  const { data } = await axiosInstance.get('/budget');

  return data;
};
