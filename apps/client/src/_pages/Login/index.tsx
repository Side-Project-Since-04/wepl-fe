import React from 'react';
import Image from 'next/image';
import { Button } from '@ui/Button';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';
import tmpImage from './1.jpeg';

const LoginView = () => {
  const router = useRouter();
  const session = useSession();
  const { status = 'loading' } = session;

  const handleKakaoBtn = async () => {
    if (status === 'unauthenticated') {
      await signIn('kakao', {
        redirect: true,
        callbackUrl: '/onboarding',
      });
    } else {
      router.push('/home');
    }
  };
  const handleSignOut = async () => {
    // Todo : 완전로그아웃 시키는 방법이 잘 안됨...
    // fetch('https://kapi.kakao.com/v1/user/logout', {
    //   method: 'POST',
    //   headers: {},
    // });
    await signOut({ redirect: true, callbackUrl: '/' });
  };

  return (
    <>
      <Image src={tmpImage} width={192} height={73} alt="wepl" />
      <h2>결혼도 관리가 필요하니까</h2>

      <Button className="mt-4 w-60 p-5" onClick={handleKakaoBtn} variant="outline">
        카카오톡으로 시작하기
      </Button>
      <Button className="mt-4 w-60 p-5" onClick={handleSignOut} variant="outline">
        로그아웃
      </Button>
    </>
  );
};

export default LoginView;
