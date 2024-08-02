import { MiddleCategoryType, SmallCategoryType } from '@/src/features/category/types';
import { Card } from '@ui/shadcn-ui/card';
import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import { WeplTabs } from '@ui/src/Tabs';
import Header from '@ui/src/components/Header';
import { SubTitle1, TextBody1 } from '@ui/src/components/Text';
import Link from 'next/link';

import React from 'react';

interface ClassficationProps {
  classification: string;
  middleCategory: MiddleCategoryType[];
}

interface CategoryTabsProps {
  middleCategories: MiddleCategoryType[];
  classification: string;
}

const MiddleClassificationList = ({ classification, middleCategory }: ClassficationProps) => {
  return (
    <div>
      <SpendingListHeader classification={classification} count={middleCategory.length} />
      <CategoryTabs classification={classification} middleCategories={middleCategory} />
    </div>
  );
};

export default MiddleClassificationList;

const SpendingListHeader = ({ classification, count }: { classification: string; count: number }) => {
  const LeftHeader = () => {
    return <SubTitle1 className="sm:text-[16px]">분류 카테고리({count})</SubTitle1>;
  };

  const RightHeader = () => {
    return (
      <Link href={`/spending/${classification}/middleCategories`} className="text-auxiliary-blue">
        <SubTitle1 className="text-auxiliary-blue">편집하기</SubTitle1>
      </Link>
    );
  };

  return <Header className="px-20" left={<LeftHeader />} right={<RightHeader />} />;
};

const CategoryTabs = ({ middleCategories, classification }: CategoryTabsProps) => {
  const tabItems = middleCategories.map((middleCategory: MiddleCategoryType) => ({
    label: middleCategory.name,
    content: (
      <MiddleClassificationContent
        middleCategoryPk={middleCategory.pk}
        spending={middleCategory.spending}
        smallCategory={middleCategory.smallCategories}
        classification={classification}
      />
    ),
  }));

  return <WeplTabs items={tabItems} />;
};
const MiddleClassificationContent = ({
  middleCategoryPk,
  smallCategory,
  spending,
  classification,
}: {
  middleCategoryPk: string;
  smallCategory: SmallCategoryType[];
  spending: number;
  classification: string;
}) => {
  return (
    <div className="px-20">
      <div className="my-24">
        <span className="text-auxiliary-red"> 지출 금액 </span> {spending.toLocaleString()} 원
      </div>
      {smallCategory.map((item, idx) => {
        const isZeroSpending = item.spending === 0;
        return (
          <Link key={idx} href={`/spending/${classification}/middle/${middleCategoryPk}/small/${item.pk}`}>
            <Card className="h-55 w-min-[320px] p-16 flex justify-between mb-12" key={idx}>
              <div className="flex items-center">
                <div
                  className={`w-18 h-18 rounded-full flex items-center justify-center mr-3 ${isZeroSpending ? 'bg-gray-200' : 'bg-neutral-black'} text-neutral-white`}
                >
                  {idx}
                </div>
                <SubTitle1 className={isZeroSpending ? 'text-gray-100' : ''}>{item.name}</SubTitle1>
              </div>
              <div className="flex items-center">
                <TextBody1 className={isZeroSpending ? 'text-gray-100' : ''}>{item.spending} 원</TextBody1>
                <Button variant={'ghost'} className="hover:bg-neutral-white">
                  <Icon name="arrow-right" size={16} className={isZeroSpending ? 'text-gray-100' : ''} />
                </Button>
              </div>
            </Card>
          </Link>
        );
      })}
      <div className="text-center">
        <Button className="w-108 h-40 bg-gray-100 text-gray-500 my-32 mx-auto hover:bg-gray-200">항목 추가하기</Button>
      </div>
    </div>
  );
};
