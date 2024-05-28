import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import LoginView from '@/src/pages/Login';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

// Mock the next-auth/react module
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(),
  signIn: jest.fn(),
}));

// Mock the next/navigation module
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('LoginView Render', () => {
  beforeEach(() => {
    render(<LoginView />);
  });
  it('Render', () => {
    (useSession as jest.Mock).mockReturnValue({ status: 'unauthenticated' });

    expect(screen.getByAltText('wepl')).toBeInTheDocument();
    expect(screen.getByText('결혼도 관리가 필요하니까')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '카카오톡으로 시작하기' })).toBeInTheDocument();
  });

  it('로그인 세션이 없을때, 카카오톡으로 시작하기를 누르면 가입 후 ', async () => {
    (useSession as jest.Mock).mockReturnValue({ status: 'unauthenticated' });
    const user = userEvent.setup();

    const kakaoBtn = screen.getByRole('button', { name: '카카오톡으로 시작하기' });

    await user.click(kakaoBtn);

    expect(signIn).toHaveBeenCalledWith('kakao', {
      redirect: true,
      callbackUrl: '/onboarding',
    });
  });

  it('redirects to /home when authenticated and button is clicked', async () => {
    const pushMock = jest.fn();
    (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
    (useSession as jest.Mock).mockReturnValue({ status: 'authenticated' });

    fireEvent.click(screen.getByRole('button', { name: '카카오톡으로 시작하기' }));

    await waitFor(() => {
      expect(pushMock).toHaveBeenCalledWith('/home');
    });
  });
});
