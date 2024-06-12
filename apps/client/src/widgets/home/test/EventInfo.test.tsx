import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import EventInfo from '../EventInfo';

describe('EventInfo', () => {
  context('초기 값', () => {
    it('맨처음화면에 홍길동 D-Day는 365', () => {
      render(<EventInfo />);
      expect(screen.findByText(/홍길동/)).toBeInTheDocument;
      expect(screen.findByText(/365/)).toBeInTheDocument;
    });
  });
});
