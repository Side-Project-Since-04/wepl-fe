'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import Header from '@ui/src/components/Header';
import { SubTitle2 } from '@ui/src/components/Text';
import { Input } from '@ui/src/Input';
import { toast } from '@ui/src/Toast';
import { ConfirmDialog } from '@ui/src/Dialog';
import { useRouter } from 'next/navigation';

const MiddleCategoryEditPage = ({ params }: { params: { classification: string; middleCategory: string } }) => {
  const router = useRouter();
  const middleCategory = decodeURIComponent(params.middleCategory);
  const classification = decodeURIComponent(params.classification);

  const [category, setCategory] = useState(middleCategory);

  const handleSave = () => {
    toast({ variant: 'success', title: '카테고리 편집이 완료되었습니다!', duration: 1500 });
    router.push(`/spending/${classification}/edit`);
  };

  const onDelete = () => {
    toast({ variant: 'success', title: '카테고리 삭제되었습니다', duration: 1500 });
    router.push(`/spending/${classification}/edit`);
  };

  const LeftHeader = () => {
    return (
      <div onClick={router.back}>
        <Icon name="arrow-left" size={24} />
      </div>
    );
  };

  const RightHeader = () => {
    return (
      <Button
        className="p-0"
        disabled={category.length == 0 || category == middleCategory}
        onClick={handleSave}
        variant="ghost"
      >
        저장
      </Button>
    );
  };

  return (
    <div>
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
            defaultValue={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="text-center">
        <ConfirmDialog
          onSubmit={onDelete}
          submitText="삭제"
          subtitle="삭제후에는 복구가 불가능합니다."
          title="정말 삭제하시겠습니까?"
        >
          <Button className="text-gray-500 underline decoration-gray-500" variant="ghost">
            카테고리 삭제
          </Button>
        </ConfirmDialog>
      </div>
    </div>
  );
};
export default MiddleCategoryEditPage;
