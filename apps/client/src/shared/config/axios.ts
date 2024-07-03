import axios, { AxiosError } from 'axios';
import { stringify } from 'qs';

export const axiosInstance = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_API_DEV_URL : process.env.NEXT_PUBLIC_API_PROD_URL,
  paramsSerializer(params: any) {
    return stringify(params, {
      arrayFormat: 'comma',
    });
  },
});

// 응답 인터셉터
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error: AxiosError) => {
    if (!error.response) throw error;
    if (!error.config) throw error;

    const originalRequest = error.config;

    if (error.response.status === 401 && originalRequest.url === '/auth/refresh') {
      throw error;
    }

    if (error.response.status === 401) {
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
        console.error('토큰 갱신 실패:');
      }
    }
  },
);
