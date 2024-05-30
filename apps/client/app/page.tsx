'use client';

import { signIn } from 'next-auth/react';
import LoginView from '@/src/_pages/Login';
export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center justify-center text-center h-full">
      <LoginView />
    </main>
  );
}
