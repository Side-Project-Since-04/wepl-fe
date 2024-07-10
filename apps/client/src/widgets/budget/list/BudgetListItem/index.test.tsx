import { render } from '@testing-library/react';
import BudgetListItem from '.';
import { CLASSIFICATION } from '@/src/features/category/constants';
import { GNB_ITEMS } from '@/src/shared/components/Gnb';

// Icon 컴포넌트를 모킹
jest.mock('@ui/src/Icon', () => {
  return ({ name }: { name: (typeof GNB_ITEMS)[number]['name'] }) => <div>{name}</div>;
});

describe('BudgetListItem', () => {
  const data = {
    order: 1,
    classification: { ...CLASSIFICATION[0] },
    budget: 10000,
  };

  it('대분류 순서, 이름이 화면에 렌더링되어야 한다.', () => {
    const { getByText } = render(<BudgetListItem {...data} />);

    expect(getByText(data.order)).toBeInTheDocument();
    expect(getByText(data.classification.guide)).toBeInTheDocument();
  });

  it('예산 금액은 원 단위로 표시되어야 한다.', () => {
    const { getByText } = render(<BudgetListItem {...data} />);
    const budgetRegExp = new RegExp(data.budget.toLocaleString() + '원');

    expect(getByText(budgetRegExp)).toBeInTheDocument();
  });
});
