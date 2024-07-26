import { CategoryClient } from '@/src/shared/apis/category';
import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useSuspenseQuery } from '@tanstack/react-query';

export const CategoryKeys = createQueryKeys('category', {
  getClassifications: {
    queryKey: null,
    queryFn: () => CategoryClient.getClassifications(),
  },
});

export const useSuspenseGetClassifications = () => {
  return useSuspenseQuery({ ...CategoryKeys.getClassifications });
};
