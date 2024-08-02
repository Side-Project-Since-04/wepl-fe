import type { SpendingDataType } from '../spending/types';
import type { FURNITURE, HONEYMOON, PRESENT, WEDDING } from './constants';

export type WeddingType = typeof WEDDING;
export type PresentType = typeof PRESENT;
export type FurnitureType = typeof FURNITURE;
export type HoneymoonType = typeof HONEYMOON;

export type ClassificationNameType = WeddingType | PresentType | FurnitureType | HoneymoonType;

export interface ClassificationType {
  id: number;
  name: string;
  guide: string;
  budget: number;
  paidSpending: number;
  notPaidSpending: number;
  middleCategories: MiddleCategoryType[];
}

export interface MiddleCategoryType {
  pk: string;
  name: string;
  spending: number;
  smallCategories: SmallCategoryType[];
}

export interface SmallCategoryType {
  pk: string;
  name: string;
  spending: number;
}

export interface SmallCategoryDetailType {
  middleCategoryPk: string;
  middleCategoryName: string;
  smallCategoryPk: string;
  smallCategoryName: string;
  spendingList: SpendingDataType[];
}
