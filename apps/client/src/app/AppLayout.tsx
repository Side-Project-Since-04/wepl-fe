import '@ui/style/globals.css';
import { QueryProvider } from './QueryProvider';

export function AppLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <div className="m-auto border-l-2 border-r-2 border-green-500 max-w-[365px] h-screen ">
      <QueryProvider>{children}</QueryProvider>
    </div>
  );
}
