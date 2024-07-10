import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  pages: {
    signIn: '/login',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: '이메일',
          placeholder: '이메일 주소 입력 요망',
        },
        password: { label: '비밀번호', type: 'password' },
      },

      /**
       * credentials : 로그인폼에서 받은 input
       */
      async authorize(credentials, req) {
        // Todo : 환경변수 필요
        const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: credentials?.username,
            password: credentials?.password,
          }),
        });

        const user = await res.json();
        if (user) {
          // Todo : 저장 정보 로직 ..
          console.log(user);
          //
          return user;
        } else {
          // Todo : 로그인 실패 로직
          return null;
        }
      },
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID!,
      clientSecret: process.env.NEXT_PUBLIC_KAKAO_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }: any) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token }: any) {
      session.accessToken = token.accessToken as any;
      return session;
    },
  },
  session: {
    maxAge: 24 * 60 * 30, // 12 hours
  },
  secret: process.env.AUTH_SECRET,
});

export { handler as GET, handler as POST };
