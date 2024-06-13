import React from 'react';

import { Button } from '@wepl/ui/Button.tsx';
import { HeadLine5 } from '@ui/src/components/HeadLine';
import { TextBody1 } from '@ui/src/components/Text';
import Link from 'next/link';

const InvitePage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center text-center h-full gap-[16px]">
        <div className="flex items-center justify-center">
          <img src="invite/invitation.svg" />
        </div>
        <div>
          <HeadLine5>웨플 초대하기</HeadLine5>
          <TextBody1 className="text-gray-500">결혼 일정과 지출을 함께 관리할 수 있습니다.</TextBody1>
        </div>
        <Button className="bg-[#FAE100] w-[320px] h-[50px]" variant="outline">
          카카오톡 초대하기
        </Button>
        <Button
          className="absolute bottom-[100px] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          variant={'ghost'}
        >
          <Link href={'/home'} className="text-gray-400">
            나중에 초대하기
          </Link>
        </Button>
      </main>
    </>
  );
};

export default InvitePage;
