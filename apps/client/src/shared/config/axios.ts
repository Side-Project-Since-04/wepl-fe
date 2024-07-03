import axios from 'axios';
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
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401) {
      originalRequest._retry = true;
      try {
        // 토큰 갱신 요청
        const response = await axiosInstance.post('/refresh-token');
        if (response.status === 200) {
          // 새 토큰이 쿠키에 저장됨
          return axiosInstance(originalRequest);
        }
      } catch (refreshError) {
        console.error('토큰 갱신 실패:', refreshError);
      }
    }

    return Promise.reject(error);
  },
);
