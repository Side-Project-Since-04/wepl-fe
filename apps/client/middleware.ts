import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // 쿠키에서 access_token 가져오기
  const accessToken = request.cookies.get('access_token');

  // access_token이 없으면 리다이렉트
  // if (!accessToken) {
  //   const redirectUrl = new URL('/', request.url);
  //   return NextResponse.redirect(redirectUrl);
  // }

  // access_token이 있으면 다음 미들웨어로 계속 진행
  return NextResponse.next();
}

export const config = {
  matcher: ['/home/:path'],
};
