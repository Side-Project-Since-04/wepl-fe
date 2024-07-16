'use client';
import { useInvitation } from '@/src/features/auth/hooks';
import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import { HeadLine3, HeadLine5 } from '@ui/src/components/HeadLine';
import { TextBody1, TextBody2 } from '@ui/src/components/Text';
import React from 'react';

interface InvitationButtonProps {
  className?: string;
}

export const InvitationButton: React.FC<InvitationButtonProps> = ({ className }) => {
  const { sendInvitation, isLoading } = useInvitation();

  const handleClick = () => {
    sendInvitation();
  };

  return (
    // <div className="flex flex-col items-center">
    <div className="w-screen max-w-[768px] h-[100px] flex gap-16 justify-center items-center bg-semantic-info-600  text-primary-25 p-10">
      <div>
        <TextBody2>결혼 준비는 같이하는 거니까!</TextBody2>
        <Button onClick={handleClick} variant={'ghost'} className="hover:bg-inherit hover:text-inherit">
          <HeadLine5>웨플 초대하기</HeadLine5>
          <Icon name="arrow-right" size={16} />
        </Button>
      </div>
      <Icon name="letter" size={77} className="text-white" />
    </div>
  );
};
