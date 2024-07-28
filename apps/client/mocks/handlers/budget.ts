import { HttpResponse, http } from 'msw';
import { CLASSIFICATIONS } from '@fsd/features/category/constants';
import type { BudgetType } from '@/src/features/budget/types';
import { createUrl } from '../utils';

const BUDGETS: BudgetType[] = CLASSIFICATIONS.map(({ name }, idx) => ({
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
