import { useUpdateSpending } from '../queries';
import { useSpendingForm } from './useSpendingForm';

export const useUpdateSpendingForm = ({
  smallCategoryPk,
  spendingPk,
}: {
  smallCategoryPk: string;
  spendingPk: string;
}) => {
  const { form, createHandleSubmit } = useSpendingForm();
  const { mutate } = useUpdateSpending();

  return {
    form,
    handleSubmit: createHandleSubmit({
      // type: 'update',
      smallCategoryPk,
      mutateFn: mutate,
      mutateFnParams: { spendingPk },
    }),
  };
};
