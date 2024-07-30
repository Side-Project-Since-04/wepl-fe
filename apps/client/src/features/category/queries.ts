import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { CategoryClient } from '@/src/shared/apis/category';
import type { ClassificationNameType } from './types';

export const CategoryKeys = createQueryKeys('category', {
  getClassifications: {
    queryKey: null,
    queryFn: () => CategoryClient.getClassifications(),
  },
  getClassification: (classificationName: ClassificationNameType | Lowercase<ClassificationNameType>) => ({
    queryKey: [classificationName],
    queryFn: () => CategoryClient.getClassification(classificationName),
  }),
});

export const useSuspenseGetClassifications = () => {
  return useSuspenseQuery({ ...CategoryKeys.getClassifications });
};

export const useSuspenseGetClassification = (
  classificationName: ClassificationNameType | Lowercase<ClassificationNameType>,
) => {
  return useSuspenseQuery(CategoryKeys.getClassification(classificationName));
};

export const useGetClassification = (
  classificationName: ClassificationNameType | Lowercase<ClassificationNameType>,
) => {
  return useQuery(CategoryKeys.getClassification(classificationName));
};
