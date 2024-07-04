import { authClient } from '@/src/api/auth';
import { QueryClient, useMutation } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/router';

const authKeys = {
  signup: ['auth'] as const,
  logout: () => [...authKeys.signup, 'logout'] as const,
  refresh: () => [...authKeys.signup, 'refresh'] as const,
};

interface SignUpResponse {
  invitationToken: string;
  signUp: boolean;
}

export const useSignUp = (router: AppRouterInstance) => {
  return useMutation<AxiosResponse<SignUpResponse>, Error, string>({
    mutationKey: authKeys.signup,
    mutationFn: authClient.signup,
    onSuccess: (res) => {
      const { invitationToken, signUp: isSignUp } = res.data;
      localStorage.setItem('invitationToken', invitationToken);
      if (isSignUp) {
        router.push('/home');
      } else {
        router.push('/on-boarding');
      }
    },
  });
};
