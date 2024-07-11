import { CategoryClient } from '@/src/shared/apis/category';
import { createQueryKeys } from '@lukemorales/query-key-factory';

export const CategoryKeys = createQueryKeys('category', {
  getClassifications: () => ({
    queryKey: ['getClassifications'],
    queryFn: () => CategoryClient.getClassifications(),
  }),
});
