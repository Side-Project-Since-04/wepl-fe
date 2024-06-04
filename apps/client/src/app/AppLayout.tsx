import '@wepl/ui/style/globals.css';
import { QueryProvider } from './QueryProvider';

export function AppLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <QueryProvider>
      <div className="relative m-auto px-[40px] sm:px-[20px] border-l-2 border-r-2 border-green-500 max-w-[768px] md:max-w-full min-w-[360px] h-screen ">
        {children}
      </div>
    </QueryProvider>
  );
}
