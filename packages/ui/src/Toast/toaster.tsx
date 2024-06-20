'use client';

import { Toast, ToastClose, ToastDescription, ToastProvider, ToastTitle, ToastViewport } from './toast';
import { useToast } from './use-toast';
import Icon from '../Icon';

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex gap-4">
              {props.variant === 'success' && <Icon name="success" size={24} />}
              {props.variant === 'alert' && <Icon name="alert" size={24} />}
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
