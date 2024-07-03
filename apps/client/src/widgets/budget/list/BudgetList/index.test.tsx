import BudgetList from '.';
import { CLASSIFICATION } from '@/src/shared/constants/classification';
import { server } from '@/mocks/server';
import { HttpResponse, http } from 'msw';
import { render, screen, waitFor } from '@/src/shared/test/testing-library-utils';
import { createUrl } from '@/mocks/utils';

describe('BudgetList', () => {
  context('비동기로 데이터 패칭이 진행될 때', () => {
    beforeEach(() => {
      render(<BudgetList />);
    });

    it('데이터 패칭 전에 로딩 상태를 보여줘야 한다.', () => {
      expect(screen.getByText('Loading...')).toBeInTheDocument();
    });

    it('데이터 패칭 완료 후에 대분류 이름들이 화면에 렌더링되어야 한다.', async () => {
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
});
