'use client';

import { cn } from '@ui/lib/utils';
import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import type { HeaderProps } from '@ui/src/components/Header';
import Header from '@ui/src/components/Header';
import { SubTitle2 } from '@ui/src/components/Text';
import { useRouter } from 'next/navigation';
import React from 'react';

export interface BackHeaderProps extends HeaderProps {
  title?: string;
}

const LeftHeader = () => {
  const router = useRouter();

  return (
    <Button
      className="p-0"
      onClick={() => {
        router.back();
      }}
      variant="ghost"
    >
      <Icon name="arrow-left" size={24} />
    </Button>
  );
};

const Title = ({ title }: { title: string }) => {
  return <SubTitle2 className="text-gray-900 text-16">{title}</SubTitle2>;
};

const BackHeader = ({ title, className, ...restProps }: BackHeaderProps) => {
  return (
    <Header
      center={title ? <Title title={title} /> : null}
      className={cn('px-12', className)}
      left={<LeftHeader />}
      {...restProps}
    />
  );
};

export default BackHeader;
