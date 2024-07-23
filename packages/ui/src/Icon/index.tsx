import { FunctionComponent, SVGProps, Suspense } from 'react';

type SVGComponent = FunctionComponent<SVGProps<SVGElement>>;

export type IconName =
  | 'alert'
  | 'arrow-down'
  | 'arrow-left'
  | 'arrow-right'
  | 'arrow-up'
  | 'close-sm'
  | 'close'
  | 'gray-wepl'
  | 'home-off'
  | 'home-on'
  | 'letter'
  | 'more'
  | 'primary-wepl'
  | 'schedule-off'
  | 'schedule-on'
  | 'setting-off'
  | 'setting-on'
  | 'success'
  | 'trash'
  | 'wallet-off'
  | 'wallet-on';

export interface IconProps {
  className?: string | undefined;
  name: IconName;
  size: 24 | 16 | 40 | number;
}

/**
 * 컴포넌트 내부에 React.lazy를 이용해 동적으로 컴포넌트를 렌더링할 경우, 해당 컴포넌트가 리렌더링함.
 * name에 따라서 동적으로 아이콘을 렌더링해야 하는데, 무한 리렌더링이 발생하는 이슈 발생.
 * 캐시를 만들어서, 이전에 로드한 아이콘 컴포넌트는 React.lazy를 사용하지 않고 캐시에서 가져옴
 */
const iconCache: Partial<Record<IconName, SVGComponent>> = {};

const IconSkeleton = ({ size }: { size: IconProps['size'] }) => {
  return <div className={`bg-gray-400 inline-block w-${size} h-${size}`}></div>;
};

const loadDynamicIcon = (name: IconName) => {
  if (iconCache[name]) {
    return iconCache[name];
  }

  const DynamicIcon: SVGComponent = require(`./public/${name}.svg`).default;
  iconCache[name] = DynamicIcon;

  return DynamicIcon;
};

export default function Icon({ className, name, size }: IconProps) {
  const DynamicIcon = loadDynamicIcon(name);

  if (!DynamicIcon) {
    console.error('Icon 로드에 실패했습니다.');
    return null;
  }

  return (
    <Suspense fallback={<IconSkeleton size={size} />}>
      <DynamicIcon width={size} height={size} className={className} />
    </Suspense>
  );
}
