import { HttpResponse, http } from 'msw';
import { CLASSIFICATIONS } from '@fsd/features/category/constants';
import { createUrl } from '../utils';

export const handlers = [
  http.get(createUrl('/category/classifications'), () => {
    return HttpResponse.json({
      content: CLASSIFICATIONS,
    });
  }),
];
