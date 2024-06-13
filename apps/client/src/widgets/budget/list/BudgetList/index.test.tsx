import { render } from '@testing-library/react';
import BudgetList from '.';
import { CLASSIFICATION } from '@/src/shared/constants/classification';

describe('BudgetList', () => {
  it('대분류 이름들이 화면에 렌더링되어야 한다.', () => {
    const { getByText } = render(<BudgetList />);

    CLASSIFICATION.forEach(({ name }) => {
      expect(getByText(name)).toBeInTheDocument();
    });
  });
});
