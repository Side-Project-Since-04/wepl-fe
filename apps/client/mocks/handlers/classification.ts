import { CLASSIFICATION } from '@/src/shared/constants/classification';
import { HttpResponse, http } from 'msw';
import { createUrl } from '../utils';

export const handlers = [
  http.get(createUrl('/category/classifications'), () => {
    return HttpResponse.json({
      data: {
        content: CLASSIFICATION,
      },
    });
  }),
];
