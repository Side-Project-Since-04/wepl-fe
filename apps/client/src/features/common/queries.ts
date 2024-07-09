import { mergeQueryKeys } from '@lukemorales/query-key-factory';
import { budgetKeys } from '../budget/queries';
import { categoryKeys } from '../category/queries';
import { weddingKeys } from '../wedding/queries';

export const queries = mergeQueryKeys(budgetKeys, categoryKeys, weddingKeys);
