'use client';

import { signIn, signOut, useSession } from 'next-auth/react';

export default function LoginPage() {
  const session = useSession();

  const { status = 'loading' } = session;

  const handleSignIn = async () => {
    await signIn('kakao', {
      redirect: true,
      callbackUrl: '/',
    });
  };

  const handleSignOut = async () => {
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  if (status === 'loading') {
    return null;
  }

  return (
    <>
      {status === 'unauthenticated' ? (
        <button className='p-2 border-2' onClick={handleSignIn}>
          카카오 로그인
        </button>
      ) : (
        <button className='p-2 border-2' onClick={handleSignOut}>
          카카오 로그아웃
        </button>
      )}
    </>
  );
}
