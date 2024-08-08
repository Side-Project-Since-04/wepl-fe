import { cn } from '@ui/lib/utils';

interface DividerProps {
  className?: string;
}

export const Divider = ({ className }: DividerProps) => {
  return <div className={cn('bg-gray-50 h-10', className)} />;
};
