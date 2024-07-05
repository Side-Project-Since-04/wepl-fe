import React from 'react';
import { render, screen } from '@fsd/shared/test/testing-library-utils';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';
import LoginView from './page';

// Mock the next-auth/react module
jest.mock('next-auth/react');
jest.mock('next/navigation');

describe('LoginView Render', () => {
  it('Render', () => {
    (useSession as jest.Mock).mockReturnValue({ status: 'unauthenticated' });
    render(<LoginView />);

    expect(screen.getByText('wepl')).toBeInTheDocument();
    expect(screen.getByText('결혼 준비에도 관리가 필요하니까')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: '카카오톡으로 시작하기' })).toBeInTheDocument();
  });

  /**
   * TODO: 테스트 코드 성공하도록 수정필요
   */
  // it('로그인 세션이 없을때, 카카오톡으로 시작하기를 누르면 가입 후 ', async () => {
  //   render(<LoginView />);

  //   (useSession as jest.Mock).mockReturnValue({ status: 'unauthenticated' });
  //   const user = userEvent.setup();

  //   const kakaoBtn = screen.getByRole('button', { name: '카카오톡으로 시작하기' });

  //   await user.click(kakaoBtn);

  //   expect(signIn).toHaveBeenCalledWith('kakao', {
  //     redirect: true,
  //     callbackUrl: '/on-boarding',
  //   });
  // });

  // it('로그인 상태시, redirects to /home', async () => {
  //   const pushMock = jest.fn();
  //   (useRouter as jest.Mock).mockReturnValue({ push: pushMock });
  //   (useSession as jest.Mock).mockReturnValue({ status: 'authenticated' });
  //   render(<LoginView />);

  //   const user = userEvent.setup();
  //   const kakaoBtn = screen.getByRole('button', { name: '카카오톡으로 시작하기' });

  //   await user.click(kakaoBtn);
  //   expect(pushMock).toHaveBeenCalledWith('/home');
  // });
});
