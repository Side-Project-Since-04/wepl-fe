import { cn } from '@ui/lib/utils';
import { SubTitle3, TextBody2 } from '@ui/src/components/Text';

export const SmallCategoryDetailSpendingItem = ({
  isBorder,
  className,
  itemName,
  itemValue,
  itemValueColor,
}: {
  isBorder?: boolean;
  className?: string;
  itemName: string;
  itemValue: string;
  itemValueColor?: `text-${string}`;
}) => {
  return (
    <div
      className={cn('flex items-center py-12', { 'border-b-[1px] border-dashed border-gray-100': isBorder }, className)}
    >
      <TextBody2 className="basis-56 text-gray-500">{itemName}</TextBody2>
      <SubTitle3 className={cn('text-gray-700', itemValueColor)}>{itemValue}</SubTitle3>
    </div>
  );
};
