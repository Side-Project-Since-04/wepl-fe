import BudgetList from '.';
import { CLASSIFICATION } from '@/src/shared/constants/classification';
import { server } from '@/mocks/server';
import { HttpResponse, http } from 'msw';
import { render, screen, waitFor } from '@/src/shared/test/testing-library-utils';
import { createUrl } from '@/mocks/utils';

describe('BudgetList', () => {
  it('데이터 패칭 후, 대분류 이름들이 화면에 렌더링되어야 한다.', async () => {
    render(<BudgetList />);

    server.use(
      http.get(createUrl('/category/classifications'), () => {
        return HttpResponse.json({
          content: CLASSIFICATION,
        });
      }),
    );

    CLASSIFICATION.forEach(async ({ guide }) => {
      await waitFor(() => {
        expect(screen.getByText(guide)).toBeInTheDocument();
      });
    });
  });
});
