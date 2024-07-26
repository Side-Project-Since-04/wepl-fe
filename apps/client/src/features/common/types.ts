export interface Pageable<T> {
  content: T[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
}

/**
 * TODO
 * code, error는 정리 필요
 */
export interface ApiErrorType extends Error {
  code: string;
  error: string;
  message: string;
  status: number;
  timestamp: string;
}
