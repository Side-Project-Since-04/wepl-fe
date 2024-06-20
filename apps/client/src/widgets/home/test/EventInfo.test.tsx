import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import WeddingInfo from '../WeddingEventInfo';

describe('EventInfo', () => {
  context('초기 값', () => {
    it('맨처음화면에 홍길동 D-Day는 365', () => {
      render(<WeddingInfo />);
      expect(screen.findByText(/홍길동/)).toBeInTheDocument;
      expect(screen.findByText(/365/)).toBeInTheDocument;
    });
  });
});
