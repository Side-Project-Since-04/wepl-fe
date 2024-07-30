import React from 'react'; // React를 명시적으로 import
import { cn } from '@ui/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
  shape?: 'rectangle' | 'circle';
}

export const Skeleton: React.FC<SkeletonProps> = ({ className, width, height, shape = 'rectangle', ...props }) => {
  return (
    <div
      className={cn('animate-pulse bg-gray-red rounded-md', shape === 'circle' ? 'rounded-full' : 'rounded', className)}
      style={{
        width: width,
        height: height,
      }}
      {...props}
    />
  );
};
