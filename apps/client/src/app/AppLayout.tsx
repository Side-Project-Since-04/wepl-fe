'use client';

import '@fsd/shared/styles/app.css';
import { Toaster } from '@ui/src/Toast';
import { cn } from '@fsd/shared/ui/utils';
import { usePathname } from 'next/navigation';
import { Gnb } from '../shared/components/Gnb';

// 디바이스 크기와 관련된 CSS를 변수로 관리
const layoutClassName = {
  minWidth: 'min-w-[280px]',
  maxWidth: 'max-w-[768px]',
  gnbPadding: 'pb-50',
};

const mainPages = {
  home: '/home',
  budget: '/budget',
  schedule: '/schedule',
  setting: '/setting',
};

export function AppLayout({ children }: { children: React.ReactNode }): JSX.Element {
  const pathname = usePathname();
  const isMainPage = Object.values(mainPages).includes(pathname);

  return (
    <div
      className={cn(
        'relative m-auto px-[40px] h-screen border-l-2 border-r-2 border-green-500 overflow-y-auto',
        'sm:px-[20px]',
        layoutClassName.minWidth,
        layoutClassName.maxWidth,
        { [layoutClassName.gnbPadding]: isMainPage },
        { 'border-none px-0 sm:px-0': pathname === '/' },
      )}
    >
      {children}
      <Toaster />
      {isMainPage && <Gnb pathname={pathname} />}
    </div>
  );
}
