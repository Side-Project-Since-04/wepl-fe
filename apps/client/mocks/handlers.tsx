import { handlers as classificationHandlers } from './handlers/classification';
import { handlers as budgetHandlers } from './handlers/budget';
import { handlers as weddingHandlers } from './handlers/wedding';

export const handlers = [...classificationHandlers, ...budgetHandlers, ...weddingHandlers];
