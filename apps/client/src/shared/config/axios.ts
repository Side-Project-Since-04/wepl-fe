import type { AxiosError } from 'axios';
import axios from 'axios';
import { stringify } from 'qs';
import type { ApiErrorType } from '@/src/features/common/types';

const isDevelopment = process.env.NODE_ENV === 'development';

const redirectToLogin = () => {
  if (typeof window !== 'undefined') {
    window.location.href = '/'; // 로그인 페이지 URL을 적절히 수정하세요
  }
};

export const axiosInstance = axios.create({
  baseURL: isDevelopment ? process.env.NEXT_PUBLIC_API_DEV_URL : process.env.NEXT_PUBLIC_API_PROD_URL,
  paramsSerializer(params: any) {
    return stringify(params, {
      arrayFormat: 'comma',
    });
  },
  withCredentials: true,
});

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    if (!error.response) throw error;
    if (!error.config) throw error;

    const originalRequest = error.config;
    const { status } = error.response;

    if ((status === 400 || status === 401) && originalRequest.url === '/auth/refresh') {
      redirectToLogin();
      return;
    }

    /**
     * 최초 401 에러 시,
     */
    if (status === 401) {
      try {
        const response = await axiosInstance.get('/auth/refresh');

        // 액세스 토큰 갱신
        if (response.status === 200) {
          return axiosInstance(originalRequest);
        }
        // 토큰 갱신 실패

        redirectToLogin();
      } catch (refreshError) {
        redirectToLogin();
      }
    }

    const ApiError = error.response.data as ApiErrorType;

    throw ApiError;
  },
);
