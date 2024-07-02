'use client';

import { Button } from '@wepl/ui/Button';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import { useSignUp } from '@/src/api/auth';

export default function LoginPage(): JSX.Element {
  const session = useSession() as any;
  const router = useRouter();

  const { mutate: signUp } = useSignUp(router);

  const handleKakaoBtn = async () => {
    try {
      const result = await signIn('kakao', {
        redirect: false,
      });
      if (result?.error) {
        console.error('Kakao sign-in failed:', result.error);
        return;
      }
      signUp(session.data?.accessToken);
    } catch (error) {
      console.error('Error during login process:', error);
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
    </main>
  );
}
