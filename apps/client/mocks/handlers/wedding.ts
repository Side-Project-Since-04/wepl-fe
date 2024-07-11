import { HttpResponse, http } from 'msw';
import { createUrl } from '../utils';

export const handlers = [
  http.put(createUrl('/totalBudget'), () => {
    return HttpResponse.json({});
  }),
];
