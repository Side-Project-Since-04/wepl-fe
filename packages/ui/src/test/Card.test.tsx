import { render, screen } from '@testing-library/react';
import { Text } from '../Card';

describe('Card', () => {
  it('should render', () => {
    render(<Text title="Test" />);
    const text = screen.getByText('Test');

    expect(text).toBeInTheDocument();
  });
});
