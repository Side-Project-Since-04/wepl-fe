import { cn } from '@ui/lib/utils';

interface ChipProps {
  isSelected: boolean;
  name: string;
  onClick?: () => void;
}

/**
 * <Bug>
 * text-body2 이후에 text-neutral-white를 넣으면 적용 안되는 이유 찾아야 함
 * cn 함수에서 twMerge가 처리하는 방식 확인 필요
 */
function Chip({ isSelected, name, onClick }: ChipProps) {
  return (
    <button
      className={cn('px-12 border-[1px] border-gray-100 rounded-100 h-28 text-body2 ', {
        'bg-gray-700 border-gray-700 text-neutral-white': isSelected,
      })}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Chip;
