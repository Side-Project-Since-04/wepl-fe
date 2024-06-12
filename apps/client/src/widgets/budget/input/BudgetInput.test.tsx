import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import BudgetInput from './BudgetInput';
import { render } from '@/src/shared/test/testing-library-utils';

describe('BudgetInput', () => {
  context('budget에 대하여', () => {
    it('budget > 0 이면, 금액과 쉼표, 원을 렌더링한다.', () => {
      const budget = 10000;
      const unit = '원';
      render(<BudgetInput budget={budget} onChange={() => {}} />);
      expect(screen.getByRole('textbox')).toHaveValue(budget.toLocaleString());
      expect(screen.getByText(unit)).toBeInTheDocument();
    });

    it('budget === 0 이면, placeholder 값을 보여준다.', () => {
      render(<BudgetInput budget={0} onChange={() => {}} />);

      expect(screen.getByRole('textbox')).toHaveAttribute('placeholder', '예산을 입력해주세요');
    });
  });

  it('Inputbox에 타이핑하면, onChange 핸들러가 실행되어야 한다.', async () => {
    const user = userEvent.setup();
    const handleChange = jest.fn();

    const { getByRole } = render(<BudgetInput budget={0} onChange={handleChange} />);

    await user.type(getByRole('textbox'), '20000');
    expect(handleChange).toHaveBeenCalled();
  });
});
