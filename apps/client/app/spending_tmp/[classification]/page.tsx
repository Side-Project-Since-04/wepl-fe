'use client';

import { WEDDING_MAIN_CATEGORIES } from '@/src/shared/constants';
import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import Header from '@ui/src/components/Header';
import Link from 'next/link';
import { redirect, useParams } from 'next/navigation';
import React from 'react';
import SpendingSummaryCard from './component/SpendingSummaryCard';

const ExpenseDetailPage = ({ params }: { params: { classification: string } }) => {
  // 파라미터를 한글 카테고리명으로 변환
  const categoryName = WEDDING_MAIN_CATEGORIES[params.classification as keyof typeof WEDDING_MAIN_CATEGORIES] || null;

  if (!categoryName) redirect('/home');

  const LeftHeader = () => {
    return (
      <Button variant={'ghost'} className="p-0">
        {/* href spending main page로 수정 필요 */}
        <Link href={'/home'}>
          <Icon name="arrow-left" size={24} />
        </Link>
      </Button>
    );
  };

  return (
    <div>
      <Header left={<LeftHeader />} center={categoryName} />
      <SpendingSummaryCard />
      {/* <MiddleClassificationList /> */}
    </div>
  );
};

export default ExpenseDetailPage;
