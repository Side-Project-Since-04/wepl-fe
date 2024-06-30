import { axiosInstance } from '@/src/shared/config/axios';
import { useMutation } from '@tanstack/react-query';

const authKeys = {
  signup: ['auth'] as const,
  login: () => [...authKeys.signup, 'logout'] as const,
  logout: () => [...authKeys.signup, 'logout'] as const,
  refresh: () => [...authKeys.signup, 'refresh'] as const,
};

// 논의가 필요할듯 ...
export const useSignUp = (aceessToke: string) => {
  const signUp = async () => {
    return await axiosInstance.post('/auth/kakao', { accessToken: aceessToke });
  };
  return useMutation({ mutationKey: authKeys.signup, mutationFn: signUp });
};
