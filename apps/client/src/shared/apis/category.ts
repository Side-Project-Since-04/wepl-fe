import { ClassificationType } from '@/src/features/category/types';
import { axiosInstance } from '../config/axios';
import { Pageable } from '@fsd/features/common/types';

const URL_ROOT = '/category';

export const CategoryClient = {
  getClassifications: async () => {
    const { data } = await axiosInstance.get<Pageable<ClassificationType>>(URL_ROOT + '/classifications');
    return data;
  },
};
