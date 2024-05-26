import './lib/globals.css';
import { QueryProvider } from './queryProvider';

export function AppLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <div className="m-auto border-l-2 border-r-2 border-indigo-500 max-w-[360px] h-screen">
      <QueryProvider>{children}</QueryProvider>
    </div>
  );
}
