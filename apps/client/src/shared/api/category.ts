import { axiosInstance } from '../config/axios';

export const getClassifications = async () => {
  const { data } = await axiosInstance.get<Pageable<Classification>>('/category/classifications');
  return data;
};

type Pageable<T> = {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

interface Classification {
  id: number;
  name: string;
  guide: string;
}
