// 개별 지출 항목에 대한 타입
export type ScheduleItemType = {
  smallCategoryPk: string;
  smallCategoryName: string;
  spendingPk: string;
  scheduleStartedDate: string;
  scheduleEndedDate: string;
  scheduleName: string;
  cost: number;
  memo: string;
};

// 페이지네이션 정보에 대한 타입
export type PaginationInfoType = {
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
};

// 전체 응답 구조에 대한 타입
export interface ScheduleResponse extends PaginationInfoType {
  content: ScheduleItemType[];
}

// 무한 스크롤에 사용할 수 있는 타입 (React Query의 useInfiniteQuery와 함께 사용 가능)
export interface InfiniteSpendingResponse {
  pages: ScheduleResponse[] | [];
  pageParams: number[];
}
