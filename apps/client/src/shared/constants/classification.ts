/**
 * 대분류를 classification으로 정의
 */

/**
 * 대분류에 대한 타입정의
 */
export const WEDDING = 'WEDDING';
export const PRESENT = 'PRESENT';
export const FURNITURE = 'FURNITURE';
export const HONEYMOON = 'HONEYMOON';

/**
 * 대분류의 타입과 이름을 배열로 정의
 */
export const CLASSIFICATION = [
  {
    type: WEDDING,
    name: '웨딩',
  },
  {
    type: PRESENT,
    name: '예물',
  },
  {
    type: FURNITURE,
    name: '혼수',
  },
  {
    type: HONEYMOON,
    name: '신혼여행',
  },
] as const;
