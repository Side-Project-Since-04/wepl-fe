'use client';

import { Button } from '@wepl/ui/Button';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';
import { cn } from '@ui/lib/utils';
import { useSignUp } from '@/src/features/auth/queries';

export default function LoginPage(): JSX.Element {
  const { data: session, status } = useSession() as any;
  const router = useRouter();

  const { mutate: signUp, isPending } = useSignUp(router);

  // Todo : 로그아웃에 대한 처리 고민..
  useEffect(() => {
    if (session?.accessToken) {
      signUp(session.accessToken);
    }
  }, [session?.accessToken]);

  const handleKakaoBtn = async () => {
    try {
      await signIn('kakao', { redirect: false });
    } catch (error) {
      console.error('Error during login process:', error);
      // 에러 처리
    }
  };

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  // Todo : 로그아웃 연결 후에는 로그아웃 버튼 삭제
  return (
    <main className="bg-primary-500 flex flex-col items-center justify-center text-center h-full">
      <div className="flex items-center justify-center">
        <img src="logo0.svg" />
        <span className="text-headline1 text-neutral-white">wepl</span>
      </div>
      <div className="text-neutral-white">결혼 준비에도 관리가 필요하니까</div>
      <Button className="mt-[22px] w-[280px] h-[50px]" onClick={handleKakaoBtn} variant="outline">
        {status === 'loading' ? <LoadingSpinner /> : '카카오톡으로 시작하기'}
      </Button>
    </main>
  );
}

export const LoadingSpinner = ({ className }: { className?: string }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn('animate-spin', className)}
      style={{
        animationDuration: '1.5s',
        animationTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
    </svg>
  );
};
