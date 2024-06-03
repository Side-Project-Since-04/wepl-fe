import React from 'react';
import Link from 'next/link';

import WeplHeader from '@wepl/ui/components/Header/index.tsx';
import { Button } from '@wepl/ui/Button.tsx';

const UserInfoPage = () => {
  const LeftHeader = () => {
    return (
      <Button variant={'ghost'}>
        <Link href={'/'}>
          <img src="left_arrow.svg" />
        </Link>
      </Button>
    );
  };

  return (
    <>
      <WeplHeader left={<LeftHeader />} />
      <div className="pt-4 pr-5 pb-4 pl-5 flex flex-col gap-3">
        <div className="text-2xl md:text-4xl ">
          만나서 반가워요!
          <br />
          결혼예식일이 정해지셨나요?
        </div>
        <div className="text-gray-500 text-sm md:text-xl ">예식일이 미정이도 괜찮습니다.</div>
        <Button className="bg-gray-50 text-base justify-start text-gray-600 h-12 mt-5" variant="outline" asChild>
          <Link href={'/user-info/wedding'}>예정입니다</Link>
        </Button>
        <Button className="bg-gray-50 text-base justify-start text-gray-600 h-12" variant="outline" asChild>
          <Link href={'/invite'}>미정입니다</Link>
        </Button>
      </div>
    </>
  );
};

export default UserInfoPage;
