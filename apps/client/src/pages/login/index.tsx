import React from 'react';
import Image from 'next/image';
import { Button } from '@ui/index';
import { useRouter } from 'next/navigation';
import { signIn, signOut, useSession } from 'next-auth/react';

const LoginView = () => {
  const router = useRouter();
  const session = useSession();
  console.log(session);
  const { data, status = 'loading' }: any = session;

  const handleKakaoBtn = async () => {
    if (status === 'unauthenticated') {
      const res = await signIn('kakao', {
        redirect: true,
        // callbackUrl: '/onboarding',
      });
      console.log(res);
    } else {
      router.push('/home');
    }
  };
  const handleSignOut = async () => {
    // Todo : 완전로그아웃을 위한 임시 코드... 나중에 미들웨어 처리
    fetch('https://kapi.kakao.com/v1/user/logout', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${data.accessToken}`,
      },
    }).then((res) => {
      console.log(res);
    });
    await signOut({ redirect: false });
  };

  return (
    <>
      <Image src="" width={192} height={73} alt="wepl" />
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
