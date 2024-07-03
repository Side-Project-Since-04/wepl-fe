import { axiosInstance } from '../config/axios';
import { Classification } from '../types/classification';
import { Pageable } from '../types/common';

export const getClassifications = async () => {
  const { data } = await axiosInstance.get<Pageable<Classification>>('/category/classifications');
  return data;
};
