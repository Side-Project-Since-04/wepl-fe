import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { CategoryClient } from '@/src/shared/apis/category';

export const CategoryKeys = createQueryKeys('category', {
  getClassifications: {
    queryKey: null,
    queryFn: () => CategoryClient.getClassifications(),
  },
  getDetailClassification: (classification) => ({
    queryKey: [{ classification }, 'detail'] as const,
    queryFn: () => CategoryClient.getDetailClassification(classification),
  }),
});

export const useSuspenseGetClassifications = () => {
  return useSuspenseQuery({ ...CategoryKeys.getClassifications });
};

export const useSuspenseGetDetailClassifications = (classification: string) => {
  return useSuspenseQuery({ ...CategoryKeys.getDetailClassification(classification) });
};
