import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const classNames = {
  pagePadding: 'px-40 sm:px-[20px]',
  screenHeightMinusHeader: 'h-[calc(100vh-56px)]',
};

const screen = {
  sm: '280px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};
