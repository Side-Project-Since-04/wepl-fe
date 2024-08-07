import sharedConfig from '@wepl/tailwind-config';
import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

/**
 * 커스텀 클래스를 사용하는 경우, twMerge에 정보를 제공하지 않는 경우,
 * 유사한 클래스들을 제거하는 이슈가 있음
 * ex) text-button-md, text-gray-500
 *
 * packages/config-tailwind/tailwind.config.ts의
 * 커스텀 theme을 제공해주어야 함
 */

const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      colors: Object.entries(sharedConfig.theme?.colors || {}).map(([k, v]: [string, Record<string, string>]) => ({
        [k]: Object.keys(v),
      })),
    },
    classGroups: {
      'font-size': Object.keys(sharedConfig.theme?.fontSize || {}).map((key) => `text-${key}`),
    },
  },
});

export const cn = (...inputs: ClassValue[]) => {
  return customTwMerge(clsx(inputs));
};
