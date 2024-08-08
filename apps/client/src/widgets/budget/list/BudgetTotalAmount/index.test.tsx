import { renderWithQuery } from '@/src/shared/test/utils';
import { BudgetTotalAmount } from '.';

describe('BudgetTotalAmount', () => {
  it('예산 금액을 원 단위로 보여준다.', async () => {
    const { findByText } = renderWithQuery(<BudgetTotalAmount />);

    const Element = await findByText(/\d+원/);
    expect(Element).toBeInTheDocument();
  });
});
