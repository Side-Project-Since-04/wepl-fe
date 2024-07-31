import { useSuspenseGetSmallCategoryDetail } from '@/src/features/category/queries';
import type { ClassificationNameType } from '@/src/features/category/types';
import { SmallCategoryDetailSpending } from '../SmallCategoryDetailSpending';

interface SmallCategoryDetailCardsProps {
  params: {
    classificationName: Lowercase<ClassificationNameType>;
    middleCategoryPk: string;
    smallCategoryPk: string;
  };
}

export const SmallCategoryDetailSpendings = ({ params }: SmallCategoryDetailCardsProps) => {
  const { data: smallCategoryDetail } = useSuspenseGetSmallCategoryDetail(
    params.middleCategoryPk,
    params.smallCategoryPk,
  );

  return (
    <ul>
      {smallCategoryDetail.spendingList.map((spending) => (
        <SmallCategoryDetailSpending key={spending.spendingPk} spending={spending} />
      ))}
    </ul>
  );
};
