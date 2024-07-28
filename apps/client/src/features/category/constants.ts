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
export const CLASSIFICATIONS = [
  {
    id: 1,
    name: 'WEDDING',
    guide: '웨딩',
    budget: 0,
    paidSpending: 0,
    notPaidSpending: 0,
    middleCategories: [],
  },
  {
    id: 2,
    name: 'PRESENT',
    guide: '예물',
    budget: 0,
    paidSpending: 0,
    notPaidSpending: 0,
    middleCategories: [],
  },
  {
    id: 3,
    name: 'FURNITURE',
    guide: '혼수',
    budget: 0,
    paidSpending: 0,
    notPaidSpending: 0,
    middleCategories: [],
  },
  {
    id: 4,
    name: 'HONEYMOON',
    guide: '신혼여행',
    budget: 0,
    paidSpending: 0,
    notPaidSpending: 0,
    middleCategories: [],
  },
] as const;
