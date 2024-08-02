'use client';

import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import { SubTitle1 } from '@ui/src/components/Text';
import Link from 'next/link';
import React from 'react';
import { Skeleton } from '@ui/src/Skeleton';
import BackHeader from '@/src/shared/components/BackHeader';
import type { ClassificationNameType } from '@/src/features/category/types';
import { useGetDetailClassification } from '@/src/features/category/queries';

interface MiddleCategoriesPageProps {
  params: {
    classificationName: Lowercase<ClassificationNameType>;
  };
}

const MiddleCategoriesPage = ({ params }: MiddleCategoriesPageProps) => {
  const { data: classification, isFetching } = useGetDetailClassification(params.classificationName);

  return (
    <main>
      <BackHeader title="카테고리 편집" />
      <div className="px-20 mt-5">
        {isFetching ? (
          <Skeleton className="h-[400px]" />
        ) : (
          classification?.middleCategories.map(({ pk, name }) => (
            <Link href={`/spending/${params.classificationName}/middle/${pk}/categoryEdit`} key={pk}>
              <div className="flex justify-between py-12">
                <SubTitle1>{name}</SubTitle1>
                <Icon name="arrow-right" size={16} />
              </div>
            </Link>
          ))
        )}
      </div>

      <div className="p-20">
        <Link href={`/spending/${params.classificationName}/middle/categoryAdd`}>
          <Button className="w-full h-44 bg-gray-50 text-gray-500" variant="outline">
            카테고리 추가
          </Button>
        </Link>
      </div>
    </main>
  );
};

export default MiddleCategoriesPage;
