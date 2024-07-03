import { axiosInstance } from '../config/axios';

export const getBudget = async () => {
  return axiosInstance.get('/budget');
};
