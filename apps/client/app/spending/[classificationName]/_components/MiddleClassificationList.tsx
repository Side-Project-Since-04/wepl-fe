'use client';

import { Card } from '@ui/shadcn-ui/card';
import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import { WeplTabs } from '@ui/src/Tabs';
import Header from '@ui/src/components/Header';
import { SubTitle1, TextBody1, TextBody2 } from '@ui/src/components/Text';
import Link from 'next/link';
import React from 'react';
import type { ClassificationNameType, ClassificationType } from '@/src/features/category/types';
import { useSuspenseGetClassification } from '@/src/features/category/queries';

type ClassficationNameProps = {
  classificationName: Lowercase<ClassificationNameType>;
};

export const MiddleClassificationList = ({ classificationName }: ClassficationNameProps) => {
  const { data: classification } = useSuspenseGetClassification(classificationName);

  return (
    <div>
      <SpendingListHeader classificationName={classificationName} />
      <CategoryTabs classification={classification} classificationName={classificationName} />
    </div>
  );
};

/**
 * SpendingListHeader
 */
const SpendingListHeader = ({ classificationName }: ClassficationNameProps) => {
  const LeftHeader = () => {
    return <SubTitle1 className="font-500">분류 카테고리(6)</SubTitle1>;
  };

  const RightHeader = () => {
    return (
      <Link className="text-auxiliary-blue" href={`/spending/${classificationName}/middleCategories`}>
        <SubTitle1 className="text-auxiliary-blue">편집하기</SubTitle1>
      </Link>
    );
  };

  return <Header className="px-20" left={<LeftHeader />} right={<RightHeader />} />;
};

/**
 * CategoryTabs
 */
type CategoryTabsProps = {
  classification: ClassificationType;
} & ClassficationNameProps;

const CategoryTabs = ({ classification, classificationName }: CategoryTabsProps) => {
  const middleCategoryLabels = classification.middleCategories.map((value) => value.name);
  const items = middleCategoryLabels.map((label) => ({
    label,
    content: (
      /**
       * !!고민!!
       * 중분류 메뉴 중에서 특정 메뉴가 확실히 존재한다고 판단하는 로직
       * filter를 사용하지 않고 다르게 처리할 수는 없을까?
       * find를 사용하면 반환값이 undefined가 될 수 있다고 판단
       */
      <MiddleClassificationNameContent
        classificationName={classificationName}
        middleCategory={classification.middleCategories.filter((value) => value.name === label)[0]}
      />
    ),
  }));

  return <WeplTabs items={items} />;
};

/**
 * MiddleClassificationNameContent
 */
type MiddleClassificationNameContentProps = {
  middleCategory: ClassificationType['middleCategories'][number];
} & ClassficationNameProps;

const MiddleClassificationNameContent = ({
  middleCategory,
  classificationName,
}: MiddleClassificationNameContentProps) => {
  const { pk: middleCategoryPk, spending, smallCategories } = middleCategory;

  return (
    <div className="px-20">
      <div className="my-24 flex items-center gap-4">
        <TextBody2 className="text-auxiliary-red"> 지출 금액 </TextBody2>
        <TextBody2 className="text-gray-500">{spending}원</TextBody2>
      </div>
      {smallCategories.map((smallCategory, idx) => {
        const isZeroSpending = smallCategory.spending === 0;
        const link = `/spending/${classificationName}/middle/${middleCategoryPk}/small/${smallCategory.pk}`;

        return (
          <Link href={link} key={smallCategory.pk}>
            <Card className="h-55 w-min-[320px] p-16 flex justify-between mb-12">
              <div className="flex items-center">
                <div
                  className={`w-18 h-18 rounded-full flex items-center justify-center mr-3 ${isZeroSpending ? 'bg-gray-200' : 'bg-neutral-black'} text-neutral-white`}
                >
                  {idx}
                </div>
                <SubTitle1 className={isZeroSpending ? 'text-gray-100' : ''}>{smallCategory.name}</SubTitle1>
              </div>
              <div className="flex items-center">
                <TextBody1 className={isZeroSpending ? 'text-gray-100' : ''}>{smallCategory.spending} 원</TextBody1>
                <Button className="hover:bg-neutral-white" variant="ghost">
                  <Icon className={isZeroSpending ? 'text-gray-100' : ''} name="arrow-right" size={16} />
                </Button>
              </div>
            </Card>
          </Link>
        );
      })}
      <div className="text-center">
        <Link href={`/spending/${classificationName}/middle/${middleCategoryPk}/small/categoryAdd`}>
          <Button className="w-108 h-40 bg-gray-100 text-gray-500 my-32 mx-auto hover:bg-gray-200">
            항목 추가하기
          </Button>
        </Link>
      </div>
    </div>
  );
};
