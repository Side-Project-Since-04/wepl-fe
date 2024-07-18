'use client';

import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import Header, { HeaderProps } from '@ui/src/components/Header';
import { useRouter } from 'next/navigation';
import React from 'react';

export interface BackHeaderProps extends HeaderProps {
  title?: string;
}

const LeftHeader = () => {
  const router = useRouter();

  return (
    <Button variant={'ghost'} className="p-0" onClick={() => router.back()}>
      <Icon size={24} name="arrow-left" />
    </Button>
  );
};

const Title = ({ title }: { title: string }) => {
  return <h2 className="text-sub-title2 text-gray-900 text-[16px]">{title}</h2>;
};

const BackHeader = ({ title, ...restProps }: BackHeaderProps) => {
  return <Header left={<LeftHeader />} center={title ? <Title title={title} /> : null} {...restProps} />;
};

export default BackHeader;
