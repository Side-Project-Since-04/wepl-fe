'use client';

import { Button } from '@ui/src/Button';
import { SubTitle2 } from '@ui/src/components/Text';
import { ConfirmDialog } from '@ui/src/Dialog';
import { Input } from '@ui/src/Input';
import { useToast } from '@ui/src/Toast';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import type { ClassificationNameType } from '@/src/features/category/types';
import { useGetSmallCategoryDetail } from '@/src/features/category/queries';
import { CategoryClient } from '@/src/shared/apis/category';
import { SpendingHeader } from '@/src/widgets/spending/SpendingHeader';

interface SmallCategoryEditPageProps {
  params: {
    classificationName: Lowercase<ClassificationNameType>;
    middleCategoryPk: string;
    smallCategoryPk: string;
  };
}

const SmallCategoryEditPage = ({ params }: SmallCategoryEditPageProps) => {
  const router = useRouter();
  const { toast } = useToast();
  const pathname = usePathname();

  const { data: smallCategoryDetail } = useGetSmallCategoryDetail(params.middleCategoryPk, params.smallCategoryPk);
  const [categoryName, setCategoryName] = useState(smallCategoryDetail?.smallCategoryName || '');

  const { mutate: updateSmallCategory, isPending: isPendingUpdateSmallCategory } = useMutation({
    mutationFn: (fnParams: { middleCategoryPk: string; smallCategoryPk: string; smallCategoryName: string }) =>
      CategoryClient.updateSmallCategory(
        fnParams.middleCategoryPk,
        fnParams.smallCategoryPk,
        fnParams.smallCategoryName,
      ),
  });
  const { mutate: deleteSmallCategory, isPending: isPendingDeleteSmallCategory } = useMutation({
    mutationFn: (fnParams: { middleCategoryPk: string; smallCategoryPk: string }) =>
      CategoryClient.deleteSmallCategory(fnParams.middleCategoryPk, fnParams.smallCategoryPk),
  });

  const prevPathname = pathname?.replace(/\/categoryEdit/, '') || '';

  const handleEdit = () => {
    updateSmallCategory(
      {
        middleCategoryPk: params.middleCategoryPk,
        smallCategoryPk: params.smallCategoryPk,
        smallCategoryName: categoryName,
      },
      {
        onSuccess() {
          toast({ variant: 'success', title: '카테고리 수정이 완료되었습니다!', duration: 1500 });
          router.replace(prevPathname);
        },
        onError() {
          toast({ variant: 'alert', title: '카테고리 삭제를 실패했습니다!', duration: 1500 });
        },
      },
    );
  };

  const handleDelete = () => {
    deleteSmallCategory(
      {
        middleCategoryPk: params.middleCategoryPk,
        smallCategoryPk: params.smallCategoryPk,
      },
      {
        onSuccess() {
          toast({ variant: 'success', title: '카테고리 삭제가 완료되었습니다!', duration: 1500 });
          router.replace(`/spending/${params.classificationName}`);
        },
        onError() {
          toast({ variant: 'alert', title: '카테고리 삭제를 실패했습니다!', duration: 1500 });
        },
      },
    );
  };

  return (
    <main>
      <SpendingHeader
        disabled={categoryName.length === 0 || isPendingUpdateSmallCategory || isPendingDeleteSmallCategory}
        onClickText={handleEdit}
        text="수정"
        title="카테고리명 수정"
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
          title={`해당 카테고리 전체 내역을\n삭제하시겠습니까?`}
        >
          <Button
            className="text-gray-500 underline decoration-gray-500"
            disabled={isPendingDeleteSmallCategory || isPendingUpdateSmallCategory}
            variant="ghost"
          >
            카테고리 전체 삭제
          </Button>
        </ConfirmDialog>
      </div>
    </main>
  );
};

export default SmallCategoryEditPage;
