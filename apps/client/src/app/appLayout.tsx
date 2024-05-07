import "./lib/globals.css";
import { QueryProvider } from "./queryProvider";

export function AppLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return <QueryProvider>{children}</QueryProvider>;
}
