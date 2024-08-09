import type { Metadata } from 'next';
import { AppLayout } from '@fsd/app/AppLayout';
import { QueryProvider } from '@fsd/app/QueryProvider';
import AuthSession from '@fsd/features/auth/AuthSession';
// import { MswProvider } from '@/src/app/MswProvider';
import KakaoScript from '@/src/shared/Kakao/Kakaoscript';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import LoadingAnimation from '@/src/shared/components/Loading';

declare global {
  interface Window {
    Kakao: any;
  }
}

export const metadata: Metadata = {
  title: 'Wepl 웨플',
  description: '결혼까지 편리하게 일정/예산 관리하자',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="ko">
      <body>
        <AuthSession>
          {/**
           * 일단 API 모킹 해제
           *
           * <MswProvider>
           **/}
          <QueryProvider>
            <AppLayout>
              <AsyncBoundary SuspenseFallback={<LoadingAnimation />}>{children}</AsyncBoundary>
            </AppLayout>
          </QueryProvider>
        </AuthSession>
      </body>
      <KakaoScript />
    </html>
  );
};

export default RootLayout;
