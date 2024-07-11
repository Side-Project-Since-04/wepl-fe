import { Classification } from '@/src/features/category/types';
import { axiosInstance } from '../config/axios';
import { Pageable } from '@fsd/features/common/types';

const URL_ROOT = '/category';

export const CategoryClient = {
  getClassifications: async () => {
    const { data } = await axiosInstance.get<Pageable<Classification>>(URL_ROOT + '/classifications');
    return data;
  },
};
