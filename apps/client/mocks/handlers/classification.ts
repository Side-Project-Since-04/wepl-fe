import { CLASSIFICATION } from '@fsd/features/category/constants';
import { HttpResponse, http } from 'msw';
import { createUrl } from '../utils';

export const handlers = [
  http.get(createUrl('/category/classifications'), () => {
    return HttpResponse.json({
      content: CLASSIFICATION,
    });
  }),
];
