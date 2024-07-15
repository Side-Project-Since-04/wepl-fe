import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@ui/lib/utils';

const buttonVariants = cva(
  'bg-gray-50 inline-flex items-center justify-center rounded-6 text-gray-600 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      size: {
        xs: 'h-32 py-5 px-12 text-button-sm',
        sm: 'h-50 py-12 px-14 text-button-md',
        lg: 'h-50 py-12 px-14 text-button-lg',
      },
    },
  },
);

export interface Button2Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button2 = React.forwardRef<HTMLButtonElement, Button2Props>(
  ({ className, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return <Comp className={cn(buttonVariants({ size, className }))} ref={ref} {...props} />;
  },
);
Button2.displayName = 'Button';

export { Button2, buttonVariants as buttonVariants2 };
