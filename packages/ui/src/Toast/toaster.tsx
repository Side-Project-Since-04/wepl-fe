'use client';

import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from './toast';
import { useToast } from './use-toast';
import successSvg from './public/24-success.svg';
import alertSvg from './public/24-alert.svg';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex gap-4">
              {props.variant === 'success' && <img src={successSvg.src} alt="성공" />}
              {props.variant === 'alert' && <img src={alertSvg.src} alt="경고" />}
              {title && <ToastTitle>{title}</ToastTitle>}
              {/* {description && <ToastDescription>{description}</ToastDescription>} */}
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
