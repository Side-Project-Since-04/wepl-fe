import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { WeddingInfoForm } from './WeddingInfoForm';
import { UseFormReturn, useForm } from 'react-hook-form';

const formSchema = z.object({
  wedding_date: z.date(),
  wedding_hole: z.string(),
  time: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return numberValue >= 0 && numberValue <= 23;
  }),
  min: z.union([z.string(), z.number()]).refine((value) => {
    const numberValue = typeof value === 'string' ? parseInt(value, 10) : value;
    return numberValue >= 0 && numberValue <= 59;
  }),
});

type FormValues = z.infer<typeof formSchema>;

function setup(jsx: React.JSX.Element) {
  return {
    user: userEvent.setup(),
    ...render(jsx),
  };
}

describe('WeddingInfoForm', () => {
  context('시작 페이지', () => {
    it('initial render', () => {});

    it('초기에 placeHolder을 보여준다', () => {
      // render(<WeddingInfoForm/>);
      expect(screen.getByPlaceholderText('YYYY-MM-DD')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('00시')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('00분')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('예식장을 입력해주세요')).toBeInTheDocument();
    });
  });

  it('Inputbox에 타이핑하면, onChange 핸들러가 실행되어야 한다.', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();
  });
});
