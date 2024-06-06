import '@wepl/ui/style/globals.css';
import { QueryProvider } from './QueryProvider';
import { Toaster } from '../../../../packages/ui/src/Toast';
import { cn } from '@fsd/shared/ui/utils';
import { screen } from '../shared/ui/screen';

export function AppLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <QueryProvider>
      <div
        className={cn(
          'relative m-auto px-[40px] border-l-2 border-r-2 border-green-500 h-screen',
          'sm:px-[20px]',
          `min-w-[${screen.sm}]`,
          `max-w-[${screen.md}]`,
        )}
      >
        {children}
      </div>
      <Toaster />
    </QueryProvider>
  );
}
