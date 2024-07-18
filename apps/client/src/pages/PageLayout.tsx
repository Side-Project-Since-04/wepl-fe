import { cn } from '../shared/ui/utils';

interface PageLayoutProps {
  isPadding?: boolean;
  className?: string;
  children: React.ReactNode;
}

function PageLayout({ isPadding, className, children }: PageLayoutProps) {
  return <main className={cn({ 'px-40 sm:px-[20px]': isPadding }, className)}>{children}</main>;
}

export default PageLayout;
