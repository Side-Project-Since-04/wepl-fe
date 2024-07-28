import { render } from '@testing-library/react';
import { CLASSIFICATIONS } from '@/src/features/category/constants';
import type { GNB_ITEMS } from '@/src/shared/components/Gnb';
import { BudgetListItem } from '.';

// Icon 컴포넌트를 모킹
jest.mock('@ui/src/Icon', () => {
  return function ({ name }: { name: (typeof GNB_ITEMS)[number]['name'] }) {
    return <div />;
  };
});

describe('BudgetListItem', () => {
  const data = {
    order: 1,
    classification: { ...CLASSIFICATIONS[0] },
  };

  it('대분류 순서, 이름이 화면에 렌더링되어야 한다.', () => {
    const { getByText } = render(<BudgetListItem {...data} />);

    expect(getByText(data.order)).toBeInTheDocument();
    expect(getByText(data.classification.guide)).toBeInTheDocument();
  });

  it('예산 금액은 원 단위로 표시되어야 한다.', () => {
    const { getByText } = render(<BudgetListItem {...data} />);
    const budgetRegExp = new RegExp(`${data.classification.budget.toLocaleString()}원`);

    expect(getByText(budgetRegExp)).toBeInTheDocument();
  });
});
