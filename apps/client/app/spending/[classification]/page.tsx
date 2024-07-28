'use client';

import Icon from '@ui/src/Icon';
import Header from '@ui/src/components/Header';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { WEDDING_MAIN_CATEGORIES } from '@/src/shared/constants';
import SpendingSummaryCard from './_components/SpendingSummaryCard';
import CategoryTabs from './_components/MiddleClassificationList';

const ExpenseDetailPage = ({ params }: { params: { classification: string } }) => {
  // 파라미터를 한글 카테고리명으로 변환
  const categoryName = WEDDING_MAIN_CATEGORIES[params.classification as keyof typeof WEDDING_MAIN_CATEGORIES] || null;

  if (!categoryName) redirect('/home');

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
      <SpendingSummaryCard />
      <CategoryTabs classification={params.classification} />
    </div>
  );
};

export default ExpenseDetailPage;
