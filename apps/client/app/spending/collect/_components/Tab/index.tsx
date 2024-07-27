import { cn } from '@ui/lib/utils';
import { TabTypeNamespace } from '../../page';

interface TabProps {
  isSelected: boolean;
  tab: TabTypeNamespace.Tab;
  onClick: (type: TabTypeNamespace.TabType) => void;
}

export function Tab({ isSelected, tab, onClick }: TabProps) {
  return (
    <button
      className={cn('relative inline-block p-12 h-48 text-gray-700 text-body1 font-normal', {
        'font-bold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[calc(100%-24px)] after:h-2 after:bg-gray-700':
          isSelected,
      })}
      onClick={() => onClick(tab.type)}
    >
      <span>{tab.name}</span>
    </button>
  );
}
