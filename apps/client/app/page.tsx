'use client';

import { signIn } from 'next-auth/react';
import { Button } from '@wepl/ui';
export default function Page(): JSX.Element {
  const onClick = async () => {
    const session = await signIn('kakao', {
      redirect: true,
      callbackUrl: '/',
    });
  };

  return (
    <>
      <main>메인 페이지 입니다.</main>
      <main>
        <Button className="p-2">Button</Button>
      </main>
    </>
  );
}
