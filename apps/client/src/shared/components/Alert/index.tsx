'use client';

import { useEffect } from 'react';
import { WeplButton } from '../Button/WeplButton';

interface AlertProps {
  title: string;
  description?: string;
  cancleText?: string;
  confirmText?: string;
  buttons?: React.ReactNode;
  onCancle?: () => void;
  onConfirm?: () => void;
}

export function Alert({ title, description, cancleText, confirmText, buttons, onCancle, onConfirm }: AlertProps) {
  useEffect(() => {
    window.document.body.style.overflow = 'hidden';

    return () => {
      window.document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="bg-gray-400/40 fixed top-0 left-0 w-full min-h-screen">
      <div className="bg-neutral-white absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] py-24 px-20 rounded-10 min-w-[300px]">
        <div className="text-center">
          <div>
            {title && <h6 className="text-gray-900 text-headline6">{title}</h6>}
            {description && <p className="mt-4 text-gray-500 text-body2">{description}</p>}
          </div>
          {buttons ? (
            buttons
          ) : (
            /**
             * TODO
             * tailwind 클래스 충돌 해결 필요
             */
            <div className="mt-20 flex gap-12">
              <WeplButton className="w-122 h-44 text-gray-500" size={'sm'} onClick={onCancle}>
                {cancleText}
              </WeplButton>
              <WeplButton className="w-122 h-44 text-auxiliary-red" size={'sm'} onClick={onConfirm}>
                {confirmText}
              </WeplButton>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Alert;
