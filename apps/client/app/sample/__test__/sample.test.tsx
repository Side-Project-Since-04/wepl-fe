import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FSDPage from '../page';

describe('FSDPage', () => {
  it('Should Have Learn Text', () => {
    // Arrange
    render(<FSDPage />);
    //

    // Act
    const text = screen.getByText('FSDPage');

    // api test
    expect(text).toBeInTheDocument();
  });

  it('msw test', async () => {
    const { container } = render(<FSDPage />);
    const text = await screen.findByText(/hello/i);
    expect(text).toHaveTextContent('hello');
  });
});
