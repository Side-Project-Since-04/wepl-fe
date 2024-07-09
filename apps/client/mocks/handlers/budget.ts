import { HttpResponse, http } from 'msw';
import { createUrl } from '../utils';
import { CLASSIFICATION } from '@fsd/features/category/constants';
import { Budget } from '@/src/features/budget/types';

const BUDGETS: Budget[] = CLASSIFICATION.map(({ name }, idx) => ({
  classificationName: name,
  amount: 10000 * (idx + 1),
}));

export const handlers = [
  http.get(createUrl('/budget'), () => {
    return HttpResponse.json(BUDGETS);
  }),
  http.put(createUrl('/budget'), () => {
    return HttpResponse.json({});
  }),
];
