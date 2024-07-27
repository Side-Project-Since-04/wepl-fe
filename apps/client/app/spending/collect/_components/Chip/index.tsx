import { cn } from '@ui/lib/utils';
import { TextBody2 } from '@ui/src/components/Text';

interface ChipProps {
  isSelected: boolean;
  name: string;
  onClick?: () => void;
}

const Chip = ({ isSelected, name, onClick }: ChipProps) => {
  return (
    <button
      className={cn('border-[1px] border-gray-100 rounded-100 px-12 h-28', {
        'bg-gray-700 border-gray-700': isSelected,
      })}
      onClick={onClick}
      type="button"
    >
      <TextBody2
        className={cn({
          'text-neutral-white': isSelected,
        })}
      >
        {name}
      </TextBody2>
    </button>
  );
};

export default Chip;
