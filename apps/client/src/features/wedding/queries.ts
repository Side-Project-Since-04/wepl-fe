import { weddingClient } from '@/src/shared/api/wedding';
import { createQueryKeys } from '@lukemorales/query-key-factory';

export const WeddingKeys = createQueryKeys('wedding', {
  updateTotalBudget: () => ({
    queryKey: ['updateTotalBudget'],
    queryFn: (budget: number) => weddingClient.updateTotalBudget(budget),
  }),
});
