'use client';

import { HeadLine4 } from '@ui/src/components/HeadLine';
import { TextBody1 } from '@ui/src/components/Text';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WeplButton } from '@/src/shared/components/Button/WeplButton';
import { useSuspenseGetSmallCategoryDetail } from '@/src/features/category/queries';
import type { ClassificationNameType } from '@/src/features/category/types';
import { CLASSIFICATION_NAME_GUIDES } from '@/src/features/category/constants';

interface SmallCategoryNameProps {
  params: {
    classificationName: Lowercase<ClassificationNameType>;
    middleCategoryPk: string;
    smallCategoryPk: string;
  };
}

export const SmallCategoryName = ({ params }: SmallCategoryNameProps) => {
  const pathname = usePathname();
  const { data: smallCategoryDetail } = useSuspenseGetSmallCategoryDetail(
    params.middleCategoryPk,
    params.smallCategoryPk,
  );

  const classificationName = params.classificationName.toUpperCase() as ClassificationNameType;
  const classificationGuide = CLASSIFICATION_NAME_GUIDES[classificationName];
  const { middleCategoryName, smallCategoryName } = smallCategoryDetail;

  return (
    <div className="bg-gray-50 pt-32 px-30 pb-42 text-center">
      <div>
        <TextBody1 className="text-gray-500">
          {classificationGuide}/{middleCategoryName}
        </TextBody1>
        <HeadLine4 className="mt-4">{smallCategoryName}</HeadLine4>
      </div>
      <div className="mt-16">
        <Link href={`${pathname}/spendingForm`}>
          <WeplButton className="bg-primary-400 hover:bg-primary-500 w-full text-neutral-white text-[15px]" size="sm">
            지출 추가하기
          </WeplButton>
        </Link>
      </div>
    </div>
  );
};
