import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import FSDPage from '../page';

describe('FSDPage', () => {
  it('Should Have Learn Text', () => {
    // Arrange
    render(<FSDPage />);
    // Act
    const text = screen.getByText('FSDPage');

    expect(text).toBeInTheDocument();
  });

  it('msw test', async () => {
    render(<FSDPage />);
    // api test
    const text = await screen.findByText(/hello/i);
    expect(text).toHaveTextContent('hello');
  });
});
