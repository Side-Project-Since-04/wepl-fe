import type { ClassificationType, SmallCategoryDetailType } from '@/src/features/category/types';
import type { Pageable } from '@fsd/features/common/types';
import { axiosInstance } from '../config/axios';

const URL_ROOT = '/category';

export const CategoryClient = {
  getClassifications: async () => {
    const { data } = await axiosInstance.get<Pageable<ClassificationType>>(`${URL_ROOT}/classifications`);
    return data;
  },
  getDetailClassification: async (classification: string): Promise<ClassificationType> => {
    const { data }: { data: ClassificationType } = await axiosInstance.get(
      URL_ROOT + `/classifications/${classification}`,
    );
    return data;
  },

  createMiddleCategory: async (payload: { classificationName: string; middleCategoryName: string }) => {
    await axiosInstance.post(`${URL_ROOT}/middle`, payload);
  },
  updateMiddleCategory: async (
    middleCategoryPk: string,
    payload: { classificationName: string; middleCategoryName: string },
  ) => {
    await axiosInstance.put(`${URL_ROOT}/middle/${middleCategoryPk}`, payload);
  },
  deleteMiddleCategory: async (middleCategoryPk: string) => {
    await axiosInstance.delete(`${URL_ROOT}/middle/${middleCategoryPk}`);
  },
  createSmallCategory: async (middleCategoryPk: string, smallCategoryName: string) => {
    await axiosInstance.post(`${URL_ROOT}/middle/${middleCategoryPk}/small`, {
      smallCategoryName,
    });
  },
  getSmallCategoryDetail: async (
    middleCategoryPk: string,
    smallCategoryPk: string,
  ): Promise<SmallCategoryDetailType> => {
    const { data } = await axiosInstance.get<SmallCategoryDetailType>(
      `${URL_ROOT}/middle/${middleCategoryPk}/small/${smallCategoryPk}`,
    );
    return data;
  },
  updateSmallCategory: async (middleCategoryPk: string, smallCategoryPk: string, smallCategoryName: string) => {
    await axiosInstance.put(`${URL_ROOT}/middle/${middleCategoryPk}/small/${smallCategoryPk}`, {
      smallCategoryName,
    });
  },
  deleteSmallCategory: async (middleCategoryPk: string, smallCategoryPk: string) => {
    await axiosInstance.delete(`${URL_ROOT}/middle/${middleCategoryPk}/small/${smallCategoryPk}`);
  },
};
