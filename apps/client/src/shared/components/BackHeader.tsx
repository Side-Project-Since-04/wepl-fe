'use client';

import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import Header, { HeaderProps } from '@ui/src/components/Header';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React from 'react';

export interface BackHeaderProps extends HeaderProps {}

const BackHeader = (props: BackHeaderProps) => {
  const router = useRouter();

  const LeftHeader = () => {
    return (
      <Button variant={'ghost'} className="p-0" onClick={() => router.back()}>
        <Icon size={24} name="arrow-left" />
      </Button>
    );
  };

  return <Header left={<LeftHeader />} {...props} />;
};

export default BackHeader;
