import { createQueryKeys } from '@lukemorales/query-key-factory';
import { useQuery, useSuspenseQuery } from '@tanstack/react-query';
import { CategoryClient } from '@/src/shared/apis/category';
import type { ClassificationNameType } from './types';

export const CategoryKeys = createQueryKeys('category', {
  getClassifications: {
    queryKey: null,
    queryFn: () => CategoryClient.getClassifications(),
  },
  getDetailClassification: (classification) => ({
    queryKey: [{ classification }, 'detail'] as const,
    queryFn: () => CategoryClient.getDetailClassification(classification),
  }),
  getSmallCategoryDetail: (middleCategoryPk: string, smallCategoryPk: string) => ({
    queryKey: [middleCategoryPk, smallCategoryPk],
    queryFn: () => CategoryClient.getSmallCategoryDetail(middleCategoryPk, smallCategoryPk),
  }),
});

export const useSuspenseGetClassifications = () => {
  return useSuspenseQuery({ ...CategoryKeys.getClassifications });
};

export const useSuspenseGetDetailClassifications = (classification: string) => {
  return useSuspenseQuery({ ...CategoryKeys.getDetailClassification(classification) });
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

export const useSuspenseGetSmallCategoryDetail = (middleCategoryPk: string, smallCategoryPk: string) => {
  return useSuspenseQuery(CategoryKeys.getSmallCategoryDetail(middleCategoryPk, smallCategoryPk));
};

export const useGetSmallCategoryDetail = (middleCategoryPk: string, smallCategoryPk: string) => {
  return useQuery(CategoryKeys.getSmallCategoryDetail(middleCategoryPk, smallCategoryPk));
};
