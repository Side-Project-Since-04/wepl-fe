'use client';
import React from 'react';
import { Button } from '@wepl/ui/Button.tsx';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginPage(): JSX.Element {
  const router = useRouter();
  const session = useSession();
  const { status = 'loading' } = session;
  const handleKakaoBtn = async () => {
    if (status === 'unauthenticated') {
      await signIn('kakao', {
        redirect: true,
        callbackUrl: '/on-boarding',
      });
    } else {
      router.push('/home');
    }
  };
  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  };
  return (
    <main className="bg-primary-500 flex flex-col items-center justify-center text-center h-full">
      <div className="flex items-center justify-center">
        <img src="logo0.svg" />
        <span className="text-5xl font-extrabold text-white font-sans">wepl</span>
      </div>
      <div className="text-white">결혼 준비에도 관리가 필요하니까</div>
      <Button className="mt-8 w-72 p-5 h-14" onClick={handleKakaoBtn} variant="outline">
        카카오톡으로 시작하기
      </Button>
      <Button className="mt-8 w-72 p-5 h-14" onClick={handleSignOut} variant="outline">
        로그아웃
      </Button>
    </main>
  );
}
