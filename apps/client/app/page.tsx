'use client';

import { signIn } from 'next-auth/react';
import LoginView from '@/src/pages/Login';
export default function Page(): JSX.Element {
  const onClick = async () => {
    const session = await signIn('kakao', {
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <main className="flex flex-col items-center justify-center text-center h-full">
      <LoginView />
    </main>
  );
}
