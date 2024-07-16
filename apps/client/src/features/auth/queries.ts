import { authClient } from '@/src/api/auth';
import { useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

const authKeys = {
  signup: ['auth'] as const,
  logout: () => [...authKeys.signup, 'logout'] as const,
  refresh: () => [...authKeys.signup, 'refresh'] as const,
};

interface SignUpResponse {
  invitationToken: string;
  signUp: boolean;
  hasWeddingInfo: boolean;
}

export const useSignUp = (router: AppRouterInstance) => {
  return useMutation<AxiosResponse<SignUpResponse>, Error, string>({
    mutationKey: authKeys.signup,
    mutationFn: authClient.signup,
    onSuccess: (res) => {
      const { invitationToken, signUp: isSignUp, hasWeddingInfo } = res.data;
      localStorage.setItem('invitationToken', invitationToken);
      if (hasWeddingInfo) {
        router.push('/home');
      } else {
        router.push('/on-boarding');
      }
    },
  });
};
