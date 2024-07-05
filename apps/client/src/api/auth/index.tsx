import { axiosInstance } from '@/src/shared/config/axios';

export const authClient = {
  signup: async (accessToken: string) => await axiosInstance.post('/auth/kakao', { accessToken }),
};
