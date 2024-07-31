import Icon from '@ui/src/Icon';
import Header from '@ui/src/components/Header';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import React from 'react';
import { Skeleton } from '@ui/src/Skeleton';
import type { ClassificationNameType } from '@/src/features/category/types';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import SpendingSummaryCard from './_components/SpendingSummaryCard';
import { MiddleClassificationList } from './_components/MiddleClassificationList';

type ClassificationNameLowercaseType = Lowercase<ClassificationNameType>;

const CLASSIFICATIONS_NAME: Record<ClassificationNameLowercaseType, string> = {
  wedding: '웨딩',
  present: '예물',
  furniture: '혼수',
  honeymoon: '신혼여행',
};

/**
 * 페이지
 */
interface ExpenseDetailPageProps {
  params: {
    classificationName: ClassificationNameLowercaseType;
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
  const name = CLASSIFICATIONS_NAME[params.classificationName];

  if (!name) {
    redirect('/home');
  }

  return (
    <div>
      <Header center={name} left={<LeftHeader />} />
      <AsyncBoundary SuspenseFallback={<Skeleton className="h-screen" />}>
        <SpendingSummaryCard classificationName={params.classificationName} />
        <MiddleClassificationList classificationName={params.classificationName} />
      </AsyncBoundary>
    </div>
  );
};

export default ExpenseDetailPage;
