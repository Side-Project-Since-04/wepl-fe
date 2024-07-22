'use client';

import BackHeader from '@/src/shared/components/BackHeader';
import { Button } from '@ui/src/Button';

interface SpendingHeaderProps {
  disabled: boolean;
  text: string;
  onClickText: () => void;
}

export const SpendingHeader = ({ disabled, text, onClickText }: SpendingHeaderProps) => {
  const RightHeader = () => {
    return (
      <Button
        variant={'ghost'}
        className="p-0 text-primary-400 hover:text-primary-500 hover:bg-transparent"
        onClick={onClickText}
        disabled={disabled}
      >
        {text}
      </Button>
    );
  };

  return <BackHeader title="지출 상세 내역" right={<RightHeader />} />;
};
