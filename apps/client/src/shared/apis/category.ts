import type { ClassificationType } from '@/src/features/category/types';
import type { Pageable } from '@fsd/features/common/types';
import { axiosInstance } from '../config/axios';

const URL_ROOT = '/category';

export const CategoryClient = {
  getClassifications: async () => {
    const { data } = await axiosInstance.get<Pageable<ClassificationType>>(`${URL_ROOT}/classifications`);
    return data;
  },
};
