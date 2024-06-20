import '@ui/style/globals.css';
import { QueryProvider } from './QueryProvider';
import { Toaster } from '@ui/src/Toast';
import { cn } from '@fsd/shared/ui/utils';

// 디바이스 크기와 관련된 CSS를 변수로 관리
const layoutClassName = {
  minWidth: 'min-w-[360px]',
  maxWidth: 'max-w-[768px]',
};

export function AppLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <QueryProvider>
      <div
        className={cn(
          'relative m-auto px-[40px] border-l-2 border-r-2 border-green-500 h-screen',
          'sm:px-[20px]',
          layoutClassName.minWidth,
          layoutClassName.maxWidth,
        )}
      >
        {children}
      </div>
      <Toaster />
    </QueryProvider>
  );
}
