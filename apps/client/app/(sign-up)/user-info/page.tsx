import React from 'react';
import Link from 'next/link';

import { Button } from '@ui/src/Button';
import { HeadLine5 } from '@ui/src/components/HeadLine';
import { TextBody2 } from '@ui/src/components/Text';
import BackHeader from '@/src/shared/components/BackHeader';

const UserInfoPage = () => {
  return (
    <>
      <div className="pt-[4px] flex flex-col gap-[16px]">
        <BackHeader />
        <HeadLine5>
          만나서 반가워요!
          <br />
          결혼예식일이 정해지셨나요?
        </HeadLine5>
        <TextBody2>예식일이 미정이도 괜찮습니다.</TextBody2>
        <Button
          className="bg-gray-50 text-base justify-start text-gray-600 h-[55px] pl-[14px] mt-[16px]"
          variant="outline"
          asChild
        >
          <Link href={'/user-info/wedding'}>예정입니다</Link>
        </Button>
        <Button
          className="bg-gray-50 text-base justify-start text-gray-600 h-[55px] pl-[14px]"
          variant="outline"
          asChild
        >
          <Link href={'/invite'}>미정입니다</Link>
        </Button>
      </div>
    </>
  );
};

export default UserInfoPage;
