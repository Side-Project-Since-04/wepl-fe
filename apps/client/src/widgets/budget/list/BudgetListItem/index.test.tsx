import { render } from '@testing-library/react';
import BudgetListItem from '.';
import { CLASSIFICATION } from '@/src/shared/constants/classification';

describe('BudgetListItem', () => {
  const data = {
    order: 1,
    classification: { ...CLASSIFICATION[0] },
    budget: 10000,
  };

  it('대분류 순서, 이름, 금액이 화면에 렌더링되어야 한다.', () => {
    const { getByText } = render(<BudgetListItem {...data} />);

    const budgetRegExp = new RegExp(data.budget + '원');

    expect(getByText(data.order)).toBeInTheDocument();
    expect(getByText(data.classification.guide)).toBeInTheDocument();
    expect(getByText(budgetRegExp)).toBeInTheDocument();
  });
});
