import { Button } from '@ui/src/Button';
import Header from '@ui/src/components/Header';
import Link from 'next/link';
import React from 'react';

const BackHeader = (path: string) => {
  const LeftHeader = () => {
    return (
      <Button variant={'ghost'} className="p-0">
        <Link href={path}>
          <img src="left_arrow.svg" />
        </Link>
      </Button>
    );
  };

  return <Header left={<LeftHeader />} />;
};

export default BackHeader;
