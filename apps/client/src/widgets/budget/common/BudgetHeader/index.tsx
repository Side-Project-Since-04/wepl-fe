import BackHeader, { BackHeaderProps } from '@/src/shared/components/BackHeader';
import { cn } from '@ui/lib/utils';

interface BudgetHeaderProps extends BackHeaderProps {
  isEnableSave: boolean;
  onSave: () => void;
}

export default function BudgetHeader({ isEnableSave, onSave }: BudgetHeaderProps) {
  const RightHeader = () => {
    return (
      <button
        className={cn('text-button-lg', isEnableSave ? 'text-primary-500' : 'text-gray-300')}
        disabled={!isEnableSave}
        onClick={onSave}
      >
        저장
      </button>
    );
  };

  return <BackHeader right={<RightHeader />} />;
}
