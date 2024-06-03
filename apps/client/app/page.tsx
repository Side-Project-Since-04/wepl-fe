'use client';
import React from 'react';
import Image from 'next/image';
import { Button } from '@wepl/ui/Button.tsx';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import tmpImage from './1.jpeg';

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
    <main className="flex flex-col items-center justify-center text-center h-full">
      <Image src={tmpImage} width={192} height={73} alt="wepl" />
      <h2>결혼도 관리가 필요하니까</h2>
      <Button className="mt-4 w-60 p-5" onClick={handleKakaoBtn} variant="outline">
        카카오톡으로 시작하기
      </Button>
      <Button className="mt-4 w-60 p-5" onClick={handleSignOut} variant="outline">
        로그아웃
      </Button>
    </main>
  );
}
