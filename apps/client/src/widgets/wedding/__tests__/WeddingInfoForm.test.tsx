// WeddingInfoForm.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { WeddingInfoForm } from '@/src/widgets/wedding/WeddingInfoForm';
import { WeddingFormData } from '@/app/(sign-up)/user-info/wedding/page';

// useForm 훅을 모킹합니다.

jest.mock('react-hook-form', () => ({
  useForm: jest.fn(),
}));

// 모킹된 useForm 함수 가져오기
const mockUseForm = jest.requireMock('react-hook-form').useForm;

// 모킹된 form 객체 생성

// useForm이 모킹된 form 객체를 반환하도록 설정
mockUseForm.mockReturnValue(mockForm);
describe('WeddingInfoForm', () => {
  const mockform = useForm as any;

  it('renders form fields', () => {
    render(<WeddingInfoForm form={mockform} />);

    // 필드가 렌더링되었는지 확인합니다.
    expect(screen.getByLabelText('예식일')).toBeInTheDocument();
    expect(screen.getByLabelText('예식 시간')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('00시')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('00분')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('예식장을 입력해주세요')).toBeInTheDocument();
  });

  // it('should call handleSubmit when form is submitted', () => {
  //   const mockSubmit = jest.fn();
  //   mockUseFormReturn.handleSubmit = mockSubmit;

  //   render(<WeddingInfoForm form={mockUseFormReturn} />);

  //   // 폼 제출을 트리거합니다.
  //   screen.getByRole('form').submit();

  //   // handleSubmit 함수가 호출되었는지 확인합니다.
  //   expect(mockSubmit).toHaveBeenCalled();
  // });

  // 추가적인 테스트는 여기서 추가할 수 있습니다.
});
