import React from 'react';
import { Badge, BadgeProps } from '../../shadcn-ui/badge';

interface WeplBadgeProps extends BadgeProps {}

const WeplBadge = ({ className, variant, ...props }: WeplBadgeProps) => {
  return (
    <Badge className={className + ' ' + 'w-35 h-22 p-0 flex items-center justify-center border-0'} variant={variant}>
      <span className="text-11">{props.children}</span>
    </Badge>
  );
};

export default WeplBadge;
