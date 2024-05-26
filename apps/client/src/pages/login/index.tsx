import React from 'react';
import Image from 'next/image';
import { Button } from '@ui/index';
const LoginView = () => {
  return (
    <>
      <Image src="" width={192} height={73} alt="wepl" />
      <h2>결혼도 관리가 필요하니까</h2>

      <Button
        className="mt-4 w-60 p-5"
        onClick={() => {
          console.log('?');
        }}
        variant="outline"
      >
        카카오톡으로 시작하기
      </Button>
    </>
  );
};

export default LoginView;
