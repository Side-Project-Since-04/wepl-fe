'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@wepl/ui';
import LoginView from '@/src/pages/login';
export default function Page(): JSX.Element {
  const onClick = async () => {
    const session = await signIn('kakao', {
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <main className="flex flex-col items-center justify-center text-center h-full">
      {/* <div className="flex flex-col items-center space-y-4"> */}
      <LoginView />
      {/* </div> */}
    </main>
  );
}
