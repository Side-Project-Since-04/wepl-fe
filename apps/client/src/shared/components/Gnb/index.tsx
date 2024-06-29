import { cn } from '@ui/lib/utils';
import { GnbItem } from './GnbItem';

export const gnbItems = [
  {
    name: '홈',
    pathname: '/home',
  },
  {
    name: '지출',
    pathname: '/budget',
  },
  {
    name: '일정',
    pathname: '/schedule',
  },
  {
    name: '설정',
    pathname: '/setting',
  },
] as const;

const gnbHeight = 'h-50';

interface GnbProps {
  pathname: string;
}

export function Gnb({ pathname }: GnbProps) {
  return (
    <nav className={cn('fixed bottom-0 left-0 w-full h-50 pt-5 border-t border-t-gray-100', gnbHeight)}>
      <ul className="flex">
        {gnbItems.map((item) => (
          <GnbItem key={item.name} isSelected={item.pathname === pathname} item={item} />
        ))}
      </ul>
    </nav>
  );
}
