'use client';

import React from 'react';
import { WEDDING_MAIN_CATEGORIES } from '@/src/shared/constants';
import SpendingSummaryCard from './_components/SpendingSummaryCard';
import CategoryTabs from './_components/MiddleClassificationList';
import { useSuspenseGetDetailClassifications } from '@/src/features/category/queries';
import Header from '@ui/src/components/Header';
import Icon from '@ui/src/Icon';
import Link from 'next/link';
const ExpenseDetailPage = ({ params }: { params: { classification: string } }) => {
  // 파라미터를 한글 카테고리명으로 변환
  const categoryName = WEDDING_MAIN_CATEGORIES[params.classification as keyof typeof WEDDING_MAIN_CATEGORIES] || null;

  const { data } = useSuspenseGetDetailClassifications(params.classification);
  const LeftHeader = () => {
    return (
      <Link className="pl-12" href="/spending">
        <Icon name="arrow-left" size={24} />
      </Link>
    );
  };
  return (
    <div>
      <Header center={categoryName} left={<LeftHeader />} />

      <SpendingSummaryCard
        name={data.guide}
        budget={data.budget}
        paidSpending={data.paidSpending}
        notPaidSpending={data.notPaidSpending}
      />
      <CategoryTabs classification={params.classification} middleCategory={data.middleCategories} />
    </div>
  );
};

export default ExpenseDetailPage;
