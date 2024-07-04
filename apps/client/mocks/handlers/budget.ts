import { HttpResponse, http } from 'msw';
import { createUrl } from '../utils';
import { CLASSIFICATION } from '@/src/shared/constants/classification';
import { Budget } from '@/src/shared/types/budget';

const BUDGETS: Budget[] = CLASSIFICATION.map(({ name }, idx) => ({
  classificationName: name,
  amount: 10000 * (idx + 1),
}));

export const handlers = [
  http.get(createUrl('/budget'), () => {
    return HttpResponse.json({ data: BUDGETS });
  }),
  http.put(createUrl('/budget'), () => {
    return HttpResponse.json({});
  }),
];
