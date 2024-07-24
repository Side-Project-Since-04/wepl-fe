import React from 'react';
import { Badge, BadgeProps } from '../../shadcn-ui/badge';
import { cn } from '@ui/lib/utils';

interface WeplBadgeProps extends BadgeProps {}

const WeplBadge = ({ className, variant, ...props }: WeplBadgeProps) => {
  return (
    <Badge className={cn('w-35 h-22 p-0 flex items-center justify-center border-0', className)} variant={variant}>
      <span className="text-11">{props.children}</span>
    </Badge>
  );
};

export default WeplBadge;
