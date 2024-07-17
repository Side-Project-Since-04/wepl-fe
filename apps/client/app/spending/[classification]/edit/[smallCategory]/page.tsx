'use client';

import React, { useState } from 'react';
import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import Header from '@ui/src/components/Header';
import Link from 'next/link';
import NumberInputFormItem from '@ui/src/components/Form/NumberFormItem';
import InputFormItem from '@ui/src/components/Form/InputFormItem';
import { SubTitle2, TextBody1 } from '@ui/src/components/Text';
import { Input } from '@ui/src/Input';
import { toast } from '@ui/src/Toast';
import { redirect } from 'next/navigation';

const page = ({ params }: { params: { classification: string; smallCategory: string } }) => {
  const smallCategory = decodeURIComponent(params.smallCategory);
  const classification = decodeURIComponent(params.classification);

  const [category, setCategory] = useState(smallCategory);

  const LeftHeader = () => {
    return (
      <Link href={`/spending/${classification}/edit`} className="p-0">
        <Icon name="arrow-left" size={24} />
      </Link>
    );
  };

  const onSave = () => {
    toast({ variant: 'success', title: '카테고리 편집이 완료되었습니다!', duration: 1500 });
    redirect(`/spending/${classification}/edit`);
  };

  const onDelete = () => {
    toast({ variant: 'success', title: '카테고리 삭제되었습니다', duration: 1500 });
    redirect(`/spending/${classification}/edit`);
  };

  const RightHeader = () => {
    return (
      <Button
        variant={'ghost'}
        className="p-0"
        onClick={() => {
          console.log(category);
          onSave();
        }}
        disabled={category.length == 0 || category == smallCategory}
      >
        저장
      </Button>
    );
  };
  return (
    <div>
      <Header
        left={<LeftHeader />}
        center={'카테고리 편집'}
        right={<RightHeader />}
        className="px-20 border-b-2 border-gray-50"
      />

      <div className="px-20 my-24">
        <div className="flex-1 pl-[16px] flex flex-col justify-end">
          <SubTitle2 className="text-gray-500 font-normal mb-8">
            카테고리명 <span className="text-destructive"> *</span>
          </SubTitle2>
          <Input
            className="bg-gray-50 pl-[14px] h-[50px]"
            defaultValue={category}
            onChange={(e) => setCategory(e.target.value)}
          />
        </div>
      </div>
      <div className="text-center">
        <Button
          variant={'ghost'}
          className="text-gray-500 underline decoration-gray-500"
          onClick={() => {
            onDelete();
          }}
        >
          카테고리 삭제
        </Button>
      </div>
    </div>
  );
};
export default page;
