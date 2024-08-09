import { useCreateSpending } from '../queries';
import { useSpendingForm } from './useSpendingForm';

export const useCreateSpendingForm = (smallCategoryPk: string) => {
  const { form, createHandleSubmit } = useSpendingForm();
  const { mutate } = useCreateSpending();

  return {
    form,
    handleSubmit: createHandleSubmit({
      // type: 'create',
      smallCategoryPk,
      mutateFn: mutate,
      mutateFnParams: {},
    }),
  };
};
