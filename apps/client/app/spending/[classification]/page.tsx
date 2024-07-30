import Icon from '@ui/src/Icon';
import Header from '@ui/src/components/Header';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import type { ClassificationNameType } from '@/src/features/category/types';
import SpendingSummaryCard from './_components/SpendingSummaryCard';
import CategoryTabs from './_components/MiddleClassificationList';

type ClassificationNameLowercaseType = Lowercase<ClassificationNameType>;

const CLASSIFICATIONS_NAME: Record<ClassificationNameLowercaseType, string> = {
  wedding: '본식',
  present: '예물',
  furniture: '혼수',
  honeymoon: '신혼여행',
};

/**
 * 페이지
 */
interface ExpenseDetailPageProps {
  params: {
    classification: ClassificationNameLowercaseType;
  };
}

const LeftHeader = () => {
  return (
    <Link className="pl-12" href="/spending">
      <Icon name="arrow-left" size={24} />
    </Link>
  );
};

const ExpenseDetailPage = ({ params }: ExpenseDetailPageProps) => {
  const name = CLASSIFICATIONS_NAME[params.classification];

  if (!name) {
    redirect('/home');
  }

  return (
    <div>
      <Header center={name} left={<LeftHeader />} />
      <SpendingSummaryCard />
      <CategoryTabs classification={params.classification} />
    </div>
  );
};

export default ExpenseDetailPage;