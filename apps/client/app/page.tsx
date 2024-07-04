'use client';

import { Button } from '@wepl/ui/Button';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useSignUp } from '@/src/api/auth';
import { useEffect } from 'react';

export default function LoginPage(): JSX.Element {
  const { data: session, status } = useSession() as any;
  const router = useRouter();

  const { mutate: signUp, isPending } = useSignUp(router);
  useEffect(() => {
    if (session?.accessToken) {
      console.log(isPending);
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
        카카오톡으로 시작하기
      </Button>
      <Button className="mt-8 w-[280px] h-[50px]" onClick={handleSignOut} variant="outline">
        로그아웃
      </Button>
      {status === 'loading' && <div>Loading...</div>}
    </main>
  );
}
