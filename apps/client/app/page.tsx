'use client';

import { signIn } from 'next-auth/react';

export default function Page(): JSX.Element {
  const onClick = async () => {
    const session = await signIn('kakao', {
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <>
      <main>Root Page</main>
    </>
  );
}
