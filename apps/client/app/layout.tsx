import type { Metadata } from 'next';
import { AppLayout } from '@fsd/app/AppLayout';
import { QueryProvider } from '@fsd/app/QueryProvider';
import AuthSession from '@fsd/features/auth/AuthSession';
import { MswProvider } from '@/src/app/MswProvider';

/** Next Font는 일단 보류 */
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Wepl 웨플',
  description: '결혼까지 편리하게 일정/예산 관리하자',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="ko">
      <body>
        <AuthSession>
          <MswProvider>
            <QueryProvider>
              <AppLayout>{children}</AppLayout>
            </QueryProvider>
          </MswProvider>
        </AuthSession>
      </body>
    </html>
  );
}
