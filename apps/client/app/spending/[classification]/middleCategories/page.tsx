import { Button } from '@ui/src/Button';
import Icon from '@ui/src/Icon';
import { SubTitle1 } from '@ui/src/components/Text';
import Link from 'next/link';
import React from 'react';
import BackHeader from '@/src/shared/components/BackHeader';

const tmpArray = [
  {
    pk1: 1,
    pk2: 1,
    name: '???',
    guide: '웨딩홀1',
  },
  {
    pk1: 2,
    pk2: 2,
    name: '???',
    guide: '웨딩홀2',
  },
  {
    pk1: 3,
    pk2: 3,
    name: '???',
    guide: '웨딩홀3',
  },
];

const MiddleCategoriesPage = ({ params }: { params: { classification: string } }) => {
  // const LeftHeader = () => {
  //   return (
  //     <Link className="p-0" href={`/spending/middle/${params.classification}`}>
  //       <Icon name="arrow-left" size={24} />
  //     </Link>
  //   );
  // };

  return (
    <div>
      {/* <Header center="카테고리 편집11" className="px-20 border-b-2 border-gray-50" left={<LeftHeader />} /> */}
      <BackHeader title="카테고리 편집" />
      <div className="px-20 mt-5">
        {tmpArray.map((value) => (
          <Link href={`/spending/${params.classification}/middle/${value.pk1}/categoryEdit`} key={value.pk1}>
            <div className="flex justify-between py-12">
              <SubTitle1>{value.guide}</SubTitle1>
              <Icon name="arrow-right" size={16} />
            </div>
          </Link>
        ))}
      </div>

      <div className="p-20">
        <Link href={`/spending/${params.classification}/middle/categoryAdd`}>
          <Button className="w-full h-44 bg-gray-50 text-gray-500" variant="outline">
            카테고리 추가
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default MiddleCategoriesPage;
