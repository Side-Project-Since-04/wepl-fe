'use client';

import React, { useState } from 'react';
import Link from 'next/link';

import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import Header from '@ui/src/components/Header';
import { SubTitle2 } from '@ui/src/components/Text';
import { Input } from '@ui/src/Input';
import { toast } from '@ui/src/Toast';
import { useRouter } from 'next/navigation';

const CreateSmallCategoryPage = ({ params }: { params: { classification: string } }) => {
  const router = useRouter();
  const classification = decodeURIComponent(params.classification);

  const [category, setCategory] = useState('');

  const LeftHeader = () => {
    return (
      <Link href={`/spending/${classification}/edit`}>
        <Icon name="arrow-left" size={24} />
      </Link>
    );
  };

  const handleSaveBtn = () => {
    toast({ variant: 'success', title: '카테고리 추가가 완료되었습니다!', duration: 1500 });
    router.push(`/spending/${classification}/edit`);
  };

  const RightHeader = () => {
    return (
      <Button variant={'ghost'} className="p-0" onClick={handleSaveBtn} disabled={category.length == 0}>
        저장
      </Button>
    );
  };
  return (
    <div>
      <Header
        left={<LeftHeader />}
        center={'카테고리 추가'}
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
    </div>
  );
};
export default CreateSmallCategoryPage;
