import Icon, { IconName } from '@ui/src/Icon';
import Link from 'next/link';
import { gnbItems } from '.';

export interface GnbItemProps {
  isSelected: boolean;
  item: (typeof gnbItems)[number];
}
export function GnbItem({ isSelected, item }: GnbItemProps) {
  const { pathname, name } = item;
  const type = pathname.slice(1);
  const iconName = (isSelected ? `${type}-on` : `${type}-off`) as IconName;

  return (
    <li className="w-1/4 text-center">
      <Link href={pathname}>
        <Icon size={24} name={iconName} />
        <div className="text-gray-700 text-11">{name}</div>
      </Link>
    </li>
  );
}
