'use client';

import React, { useCallback, useState } from 'react';
import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import Header from '@ui/src/components/Header';
import { SubTitle2 } from '@ui/src/components/Text';
import { Input } from '@ui/src/Input';
import { toast } from '@ui/src/Toast';
import { ConfirmDialog } from '@ui/src/Dialog';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useGetClassification } from '@/src/features/category/queries';
import type { ClassificationNameType } from '@/src/features/category/types';
import { CategoryClient } from '@/src/shared/apis/category';

interface MiddleCategoryEditPageProps {
  params: { classificationName: Lowercase<ClassificationNameType>; middleCategoryPk: string };
}

const MiddleCategoryEditPage = ({ params }: MiddleCategoryEditPageProps) => {
  const { data: classification } = useGetClassification(params.classificationName);

  const router = useRouter();
  const middleCategoryPk = params.middleCategoryPk;
  const classificationName = params.classificationName;

  const defaultCategoryName =
    classification?.middleCategories.filter((value) => value.pk === middleCategoryPk)[0]?.name || '';

  const [categoryName, setCategoryName] = useState(defaultCategoryName);

  /**
   * 카테고리 수정
   */
  const { mutate: updateMiddleCategory, isPending: isPendingUpdateMiddleCategory } = useMutation({
    mutationFn: (fnParams: {
      pk: string;
      payload: {
        classificationName: Lowercase<ClassificationNameType>;
        middleCategoryName: string;
      };
    }) => CategoryClient.updateMiddleCategory(fnParams.pk, fnParams.payload),
  });
  /**
   * 카테고리 삭제
   */
  const { mutate: deleteMiddleCategory, isPending: isPendingDeleteMiddleCategory } = useMutation({
    mutationFn: (pk: string) => CategoryClient.deleteMiddleCategory(pk),
  });

  const handleSave = () => {
    updateMiddleCategory(
      {
        pk: middleCategoryPk,
        payload: {
          classificationName,
          middleCategoryName: categoryName,
        },
      },
      {
        onSuccess() {
          toast({ variant: 'success', title: '카테고리 편집이 완료되었습니다!', duration: 1500 });
          router.back();
        },
        onError() {
          toast({ variant: 'alert', title: '카테고리 편집을 실패했습니다!', duration: 1500 });
        },
      },
    );
  };

  const handleDelete = () => {
    deleteMiddleCategory(middleCategoryPk, {
      onSuccess() {
        toast({ variant: 'success', title: '카테고리 삭제되었습니다', duration: 1500 });
        router.back();
      },
      onError() {
        toast({ variant: 'alert', title: '카테고리 삭제를 실패했습니다!', duration: 1500 });
      },
    });
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
        disabled={isPendingUpdateMiddleCategory || isPendingDeleteMiddleCategory || categoryName.length === 0}
        onClick={handleSave}
        variant="ghost"
      >
        저장
      </Button>
    );
  }, [categoryName, isPendingUpdateMiddleCategory, isPendingDeleteMiddleCategory]);

  return (
    <main>
      <Header
        center="카테고리 편집"
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
      <div className="text-center">
        <ConfirmDialog
          onSubmit={handleDelete}
          submitText="삭제"
          subtitle="삭제후에는 복구가 불가능합니다."
          title="정말 삭제하시겠습니까?"
        >
          <Button
            className="text-gray-500 underline decoration-gray-500"
            disabled={isPendingUpdateMiddleCategory || isPendingDeleteMiddleCategory}
            variant="ghost"
          >
            카테고리 삭제
          </Button>
        </ConfirmDialog>
      </div>
    </main>
  );
};
export default MiddleCategoryEditPage;
