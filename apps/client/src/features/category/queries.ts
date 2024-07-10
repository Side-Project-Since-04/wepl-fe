import { categoryClient } from '@/src/shared/api/category';
import { createQueryKeys } from '@lukemorales/query-key-factory';

export const CategoryKeys = createQueryKeys('category', {
  getClassifications: () => ({
    queryKey: ['getClassifications'],
    queryFn: () => categoryClient.getClassifications(),
  }),
});
