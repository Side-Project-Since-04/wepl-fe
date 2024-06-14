import { FURNITURE, HONEYMOON, PRESENT, WEDDING } from '../constants/classification';

export type Wedding = typeof WEDDING;
export type Present = typeof PRESENT;
export type Furniture = typeof FURNITURE;
export type Honeymoon = typeof HONEYMOON;

export type Classification = Wedding | Present | Furniture | Honeymoon;
