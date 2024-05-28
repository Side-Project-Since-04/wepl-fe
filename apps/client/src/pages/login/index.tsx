import React from 'react';
import Image from 'next/image';
import { Button } from '@ui/index';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';

const LoginView = () => {
  const router = useRouter();
  const session = useSession();
  const { status = 'loading' } = session;
  const handleKakaoBtn = async () => {
    if (status === 'unauthenticated') {
      await signIn('kakao', {
        redirect: true,
        callbackUrl: '/sign',
      });
    } else {
      router.push('/home');
    }
  };

  return (
    <>
      <Image src="" width={192} height={73} alt="wepl" />
      <h2>결혼도 관리가 필요하니까</h2>

      <Button className="mt-4 w-60 p-5" onClick={handleKakaoBtn} variant="outline">
        카카오톡으로 시작하기
      </Button>
    </>
  );
};

export default LoginView;
