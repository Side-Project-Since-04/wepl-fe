import type { Metadata } from 'next';
import { AppLayout } from '@fsd/app/AppLayout';
import { QueryProvider } from '@fsd/app/QueryProvider';
import AuthSession from '@fsd/features/auth/AuthSession';
import KakaoScript from '@/src/shared/Kakao/Kakaoscript';
/** Next Font는 일단 보류 */
// import { Inter } from "next/font/google";
// const inter = Inter({ subsets: ["latin"] });

declare global {
  interface Window {
    Kakao: any;
  }
}

export const metadata: Metadata = {
  title: 'Wepl 웨플',
  description: '결혼까지 편리하게 일정/예산 관리하자',
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="ko">
      <body>
        <AuthSession>
          <QueryProvider>
            <AppLayout>{children}</AppLayout>
          </QueryProvider>
        </AuthSession>
      </body>
      <KakaoScript />
    </html>
  );
}
