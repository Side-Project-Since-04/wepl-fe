import '@wepl/ui/style/globals.css';
import { QueryProvider } from './QueryProvider';

export function AppLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <QueryProvider>
      <div className="relative m-auto border-l-2 border-r-2 border-green-500 max-w-full min-w-[365px] md:max-w-[760px] h-screen ">
        {children}
      </div>
    </QueryProvider>
  );
}
