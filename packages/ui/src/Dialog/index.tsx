import React, { useState } from 'react';

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../../shadcn-ui/dialog';
import { Button } from '../Button';
import { SubTitle2, TextBody2 } from '../components/Text';
import { HeadLine6 } from '../components/HeadLine';

interface DialogProps {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  submitText: string;
  onSubmit: () => void;
}

export const ConfirmDialog = ({ title, subtitle, submitText, ...props }: DialogProps) => {
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {
    props.onSubmit();
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{props.children}</DialogTrigger>
      <DialogContent className="sm:max-w-[296px] md:max-w-[425px] p-24">
        <DialogHeader className="flex flex-col items-center justify-center">
          <HeadLine6 className="whitespace-pre-line text-center">{title}</HeadLine6>
          <TextBody2 className="text-gray-300 font-normal">{subtitle}</TextBody2>
        </DialogHeader>
        <DialogFooter className="mt-20 flex flex-row !justify-center gap-12">
          <Button variant="outline" className="w-122 h-44 bg-gray-50 text-gray-500" onClick={() => setOpen(false)}>
            취소
          </Button>
          <Button variant="outline" onClick={handleSubmit} className="w-122 h-44 !text-auxiliary-red bg-gray-50">
            {submitText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
