import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import Header from '@ui/src/components/Header';
import { SubTitle1 } from '@ui/src/components/Text';
import Link from 'next/link';
import React from 'react';

const EditCategoryPage = ({ params }: { params: { classification: string } }) => {
  const LeftHeader = () => {
    return (
      <Link href={`/spending/${params.classification}`} className="p-0">
        <Icon name="arrow-left" size={24} />
      </Link>
    );
  };

  return (
    <div>
      <Header left={<LeftHeader />} center={'카테고리 편집'} className="px-20 border-b-2 border-gray-50" />
      <div className="px-20 mt-5">
        {/* Todo : map 구현  */}
        <div className="flex justify-between py-12">
          <SubTitle1>웨딩홀</SubTitle1>
          <Link href={`/spending/${params.classification}/edit/${decodeURIComponent('웨딩홀')}`}>
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
        <div className="flex justify-between py-12">
          <SubTitle1>웨딩홀</SubTitle1>
          <Icon name="arrow-right" size={16} />
        </div>
        <div className="flex justify-between py-12">
          <SubTitle1>웨딩홀</SubTitle1>
          <Icon name="arrow-right" size={16} />
        </div>
      </div>

      <div className="p-20">
        <Link href={`/spending/${params.classification}/edit/add`}>
          <Button variant={'outline'} className="w-full h-44 bg-gray-50 text-gray-500">
            카테고리 추가
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default EditCategoryPage;
