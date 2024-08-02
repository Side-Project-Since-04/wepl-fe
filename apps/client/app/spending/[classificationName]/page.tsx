'use client';

import React from 'react';
import Header from '@ui/src/components/Header';
import Icon from '@ui/src/Icon';
import Link from 'next/link';
import { CLASSIFICATION_NAME_GUIDES } from '@/src/features/category/constants';
import { useSuspenseGetDetailClassification } from '@/src/features/category/queries';
import SpendingSummaryCard from './_components/SpendingSummaryCard';
import CategoryTabs from './_components/MiddleClassificationList';


const ExpenseDetailPage = ({ params }: { params: { classificationName: string } }) => {
  const { data } = useSuspenseGetDetailClassification(params.classificationName);
  const categoryName = CLASSIFICATION_NAME_GUIDES[params.classificationName.toUpperCase()] ;
  // 파라미터를 한글 카테고리명으로 변환


  return (
    <div>
      <Header center={categoryName} left={<LeftHeader />} />

      <SpendingSummaryCard
        budget={data.budget}
        name={data.guide}
        notPaidSpending={data.notPaidSpending}
        paidSpending={data.paidSpending}
      />
      <CategoryTabs classification={params.classificationName} middleCategory={data.middleCategories} />
    </div>
  );
};

export default ExpenseDetailPage;


const LeftHeader = () => {
  return (
    <Link className="pl-12" href="/spending">
      <Icon name="arrow-left" size={24} />
    </Link>
  );
};