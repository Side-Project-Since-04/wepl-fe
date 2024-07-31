import { HttpResponse, http } from 'msw';
import { CLASSIFICATIONS } from '@fsd/features/category/constants';
import { server } from '@/mocks/server';
import { render, screen, waitFor } from '@/src/shared/test/testing-library-utils';
import { createUrl } from '@/mocks/utils';
import { BudgetList } from '.';

describe('BudgetList', () => {
  it('데이터 패칭 후, 대분류 이름들이 화면에 렌더링되어야 한다.', async () => {
    render(<BudgetList />);

    server.use(
      http.get(createUrl('/category/classifications'), () => {
        return HttpResponse.json({
          content: CLASSIFICATIONS,
        });
      }),
    );

    CLASSIFICATIONS.forEach(async ({ guide }) => {
      await waitFor(() => {
        expect(screen.getByText(guide)).toBeInTheDocument();
      });
    });
  });
});
