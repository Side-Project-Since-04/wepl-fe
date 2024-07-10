import { mergeQueryKeys } from '@lukemorales/query-key-factory';
import { BudgetKeys } from '../budget/queries';
import { CategoryKeys } from '../category/queries';
import { WeddingKeys } from '../wedding/queries';

export const queries = mergeQueryKeys(BudgetKeys, CategoryKeys, WeddingKeys);
