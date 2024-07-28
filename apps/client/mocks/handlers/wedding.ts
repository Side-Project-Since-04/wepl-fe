import { HttpResponse, http } from 'msw';
import { createUrl } from '../utils';

export const handlers = [
  http.get(createUrl('/wedding'), () => {
    return HttpResponse.json({
      weddingDate: '2024-07-03',
      weddingTime: '23:23',
      weddingHall: '23',
      totalBudget: 123455,
      totalSpending: 0,
      spendingPerBudget: 0,
    });
  }),
  http.put(createUrl('/totalBudget'), () => {
    return HttpResponse.json({});
  }),
];
