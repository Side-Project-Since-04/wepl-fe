import { render } from '@testing-library/react';
import { BudgetAmount } from '.';
import userEvent from '@testing-library/user-event';
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider';
import mockRouter from 'next-router-mock';
import { server } from '@/mocks/server';
import { HttpResponse, http } from 'msw';
import { createUrl } from '@/mocks/utils';

describe('BudgetAmount', () => {
  it('예산 금액을 원 단위로 보여준다.', () => {
    const { getByText } = render(<BudgetAmount />);

    /**
     * 전체 예산 가져오기 테스트
     */
    // server.use(
    //   http.get(createUrl('/wedding'), () => {
    //     return HttpResponse.json({
    //       content: '',
    //     });
    //   }),
    // );

    expect(getByText(/\d+원/)).toBeInTheDocument();
  });

  it('수정 버튼을 클릭하면, 예산 수정 페이지로 이동한다.', async () => {
    const user = userEvent.setup();
    const { getByText } = render(<BudgetAmount />, {
      wrapper: MemoryRouterProvider,
    });
    await user.click(getByText('수정'));

    expect(mockRouter.asPath).toEqual('/budget/input');
  });
});
