import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 쿠키에서 access_token 가져오기
  let accessToken = request.cookies.get('access_token');

  // access_token이 없으면 리다이렉트
  if (!accessToken) {
    // 리다이렉트 할 URL 설정
    // const redirectUrl = new URL('/', request.url);
    // 리다이렉트 응답 반환
    // return NextResponse.redirect(redirectUrl);
  }

  // access_token이 있으면 다음 미들웨어로 계속 진행
  return request;
}

export const config = {
  matcher: ['/home/:path'],
};
