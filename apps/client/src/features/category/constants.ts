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
 *
 * 백엔드의 데이터 형식과 통일
 */
export const CLASSIFICATION = [
  {
    id: 1,
    name: WEDDING,
    guide: '웨딩',
  },
  {
    id: 2,
    name: PRESENT,
    guide: '예물',
  },
  {
    id: 3,
    name: FURNITURE,
    guide: '혼수',
  },
  {
    id: 4,
    name: HONEYMOON,
    guide: '신혼여행',
  },
] as const;
