import { BudgetAmount } from '.';
import userEvent from '@testing-library/user-event';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import mockRouter from 'next-router-mock';
import { renderWithQuery } from '@/src/shared/test/utils';

describe('BudgetAmount', () => {
  it('예산 금액을 원 단위로 보여준다.', async () => {
    const { findByText } = renderWithQuery(<BudgetAmount />);

    const Element = await findByText(/\d+원/);
    expect(Element).toBeInTheDocument();
  });

  it('수정 버튼을 클릭하면, 예산 수정 페이지로 이동한다.', async () => {
    const user = userEvent.setup();
    const { findByText } = renderWithQuery(<BudgetAmount />, {
      wrapper: MemoryRouterProvider,
    });

    const Element = await findByText('수정');
    await user.click(Element);

    expect(mockRouter.asPath).toEqual('/budget/input');
  });
});
