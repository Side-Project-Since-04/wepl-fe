import { FURNITURE, HONEYMOON, PRESENT, WEDDING } from './constants';

export type Wedding = typeof WEDDING;
export type Present = typeof PRESENT;
export type Furniture = typeof FURNITURE;
export type Honeymoon = typeof HONEYMOON;

export type ClassificationName = Wedding | Present | Furniture | Honeymoon;

export interface Classification {
  id: number;
  name: string;
  guide: string;
  budget: number;
  paidSpending: number;
  notPaidSpending: number;
  middleCategories: MiddleCategory[];
}

export interface MiddleCategory {
  pk: string;
  name: string;
  spending: number;
  smallCategories: SmallCategory[];
}

export interface SmallCategory {
  pk: string;
  name: string;
  spending: number;
}
