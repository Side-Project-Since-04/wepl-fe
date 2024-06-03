import React from 'react';
import Link from 'next/link';

import WeplHeader from '@wepl/ui/components/Header/index.tsx';
import { Button } from '@wepl/ui/Button.tsx';

const WeddingInfoPage = () => {
  const LeftHeader = () => {
    return (
      <Button variant={'ghost'}>
        <Link href={'/user-info'}>
          <img src="/left_arrow.svg" />
        </Link>
      </Button>
    );
  };

  const RightHeader = () => {
    return (
      <Link href={'/user-info'} className="text-lg">
        다음
      </Link>
    );
  };

  return (
    <>
      <WeplHeader left={<LeftHeader />} right={<RightHeader />} />
      <div className="pt-10 pr-5 pb-4 pl-5 flex flex-col gap-10"></div>
    </>
  );
};

export default WeddingInfoPage;
