import { handlers as classificationHandlers } from './classification';
import { handlers as budgetHandlers } from './budget';
import { handlers as weddingHandlers } from './wedding';
import { handlers as mainHandlers } from './main';

export const handlers = [...classificationHandlers, ...budgetHandlers, ...weddingHandlers, ...mainHandlers];
