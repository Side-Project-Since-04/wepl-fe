'use client';

import React, { useCallback, useState } from 'react';
import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import Header from '@ui/src/components/Header';
import { SubTitle2 } from '@ui/src/components/Text';
import { Input } from '@ui/src/Input';
import { toast } from '@ui/src/Toast';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { CategoryClient } from '@/src/shared/apis/category';
import type { ClassificationNameType } from '@/src/features/category/types';

interface SmallCategoryAddPageProps {
  params: {
    classificationName: Lowercase<ClassificationNameType>;
    middleCategoryPk: string;
  };
}

const SmallCategoryAddPage = ({ params }: SmallCategoryAddPageProps) => {
  const router = useRouter();
  const [categoryName, setCategoryName] = useState('');

  const { mutate: createMiddleCategory, isPending: isPendingCreateMiddleCategory } = useMutation({
    mutationFn: (fnParams: { middleCategoryPk: string; smallCategoryName: string }) =>
      CategoryClient.createSmallCategory(fnParams.middleCategoryPk, fnParams.smallCategoryName),
  });

  const handleSaveBtn = () => {
    createMiddleCategory(
      {
        middleCategoryPk: params.middleCategoryPk,
        smallCategoryName: categoryName,
      },
      {
        onSuccess() {
          toast({ variant: 'success', title: '카테고리 추가가 완료되었습니다!', duration: 1500 });
          router.back();
        },
        onError() {
          toast({ variant: 'alert', title: '카테고리 추가를 실패했습니다!', duration: 1500 });
        },
      },
    );
  };

  const LeftHeader = useCallback(() => {
    return (
      <button
        onClick={() => {
          router.back();
        }}
        type="button"
      >
        <Icon name="arrow-left" size={24} />
      </button>
    );
  }, [router]);

  const RightHeader = useCallback(() => {
    return (
      <Button
        className="p-0"
        disabled={isPendingCreateMiddleCategory || categoryName.length === 0}
        onClick={handleSaveBtn}
        variant="ghost"
      >
        저장
      </Button>
    );
  }, [categoryName, isPendingCreateMiddleCategory]);

  return (
    <div>
      <Header
        center="카테고리 추가"
        className="px-20 border-b-2 border-gray-50"
        left={<LeftHeader />}
        right={<RightHeader />}
      />

      <div className="px-20 my-24">
        <div className="flex-1 pl-[16px] flex flex-col justify-end">
          <SubTitle2 className="text-gray-500 font-normal mb-8">
            카테고리명 <span className="text-destructive"> *</span>
          </SubTitle2>
          <Input
            className="bg-gray-50 pl-[14px] h-[50px]"
            defaultValue={categoryName}
            onChange={(e) => {
              setCategoryName(e.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
};
export default SmallCategoryAddPage;
