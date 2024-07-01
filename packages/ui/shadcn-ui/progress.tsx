'use client';

import * as React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';

import { cn } from '../lib/utils';
import { HeadLine3, HeadLine5 } from '@ui/src/components/HeadLine';

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn('relative h-24 w-full overflow-hidden rounded-full bg-secondary', className)}
    {...props}
  >
    <ProgressPrimitive.Indicator
      className="h-full w-full flex-1 bg-primary-400 transition-all"
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };

interface DonutProgress {
  progress: number;
  size: number;
}

export const DonutProgress = ({ progress, size }: DonutProgress) => {
  const radius = (size - 35) / 2; // 반지름
  const circumference = 2 * Math.PI * radius; // 원둘레
  const offset = circumference - (progress / 100) * circumference; // 오프셋

  return (
    <div className="flex items-center justify-center">
      <svg width={size} height={size}>
        <circle
          className="text-gray-100"
          strokeWidth="30"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          className="text-primary-400"
          strokeWidth="30"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="butt"
          stroke="currentColor"
          fill="transparent"
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
      </svg>
      <HeadLine5 className="absolute text-28 text-primary-400">{progress}%</HeadLine5>
    </div>
  );
};
