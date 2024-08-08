import React, { useState } from 'react';
import { cn } from '@ui/lib/utils';
import {
  Dialog as DialogWrapper,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from '../../shadcn-ui/dialog';
import { Button } from '../Button';
import { TextBody2 } from '../components/Text';
import { HeadLine6 } from '../components/HeadLine';

/**
 * submitType에 따라
 * Alert, Confirm 역할을 수행
 */
export interface DialogProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  submitText: string;
  submitType: 'alert' | 'confirm';
  onSubmit: () => void;
}

export function Dialog({ title, subtitle, submitType, submitText, ...props }: DialogProps) {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    props.onSubmit();
    setOpen(false);
  };

  return (
    <DialogWrapper onOpenChange={setOpen} open={open}>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="sm:max-w-[296px] md:max-w-[425px] p-24">
        <DialogHeader className="flex flex-col items-center justify-center">
          <HeadLine6 className="whitespace-pre-line text-center">
            <DialogTitle>{title}</DialogTitle>
          </HeadLine6>
          <TextBody2 className="mt-8 text-gray-600 font-normal whitespace-pre-line text-center">
            <DialogDescription>{subtitle}</DialogDescription>
          </TextBody2>
        </DialogHeader>
        <DialogFooter className="mt-20 flex flex-row !justify-center gap-12">
          <Button
            className="w-122 h-44 bg-gray-50 text-gray-500"
            onClick={() => {
              setOpen(false);
            }}
            variant="outline"
          >
            취소
          </Button>
          <Button
            className={cn(
              'w-122 h-44 bg-gray-50',
              { 'text-auxiliary-red': submitType === 'alert' },
              { 'text-primary-400': submitType === 'confirm' },
            )}
            onClick={handleSubmit}
            variant="outline"
          >
            {submitText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </DialogWrapper>
  );
}
