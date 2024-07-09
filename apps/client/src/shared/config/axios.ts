import axios, { AxiosError } from 'axios';
import { stringify } from 'qs';

const isDevelopment = process.env.NODE_ENV === 'development';

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
      throw error;
    }

    if (status === 401) {
      try {
        // 토큰 갱신 요청
        const response = await axiosInstance.get('/auth/refresh');

        if (response.status === 200) {
          // 새 토큰이 쿠키에 저장됨
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        // 로그인 에러 띄우고, 로그인 페이지로 이동
        // 전역 에러바운더리에서 에러 캐치해서, 로그인 페이지로 이동
        return Promise.reject(refreshError);
      }
    }
  },
);
