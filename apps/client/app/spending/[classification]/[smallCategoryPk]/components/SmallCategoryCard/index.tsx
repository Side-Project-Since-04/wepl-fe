'use client';

import { useSpendingStore } from '@/src/features/spending/store';
import { cn } from '@ui/lib/utils';
import WeplBadge from '@ui/src/Badge';
import BottomSheet from '@ui/src/BottomSheet';
import { HeadLine6 } from '@ui/src/components/HeadLine';
import { SubTitle2, SubTitle3, TextBody2 } from '@ui/src/components/Text';
import Icon from '@ui/src/Icon';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const tmp = {
  smallCategoryPk: 'string',
  cost: 3000000,
  order: 0,
  isScheduled: true,
  isPaid: true,
  scheduleName: 'string',
  scheduleStartedAt: '2024-07-31T14:40:32.373Z',
  scheduleEndedAt: '2024-07-31T18:40:32.373Z',
  paidAt: '2024-07-31T06:40:32.373Z',
  expectedPaidAt: '2024-07-31T06:40:32.373Z',
  memo: 'string',
};

const SmallCategoryCard = () => {
  const pathname = usePathname();
  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  const { setSpendingItem: setSpending } = useSpendingStore();

  const onOpenButton = () => {
    setOpenBottomSheet(true);
    setSpending(tmp);
  };

  return (
    <div className="py-40 px-30">
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <HeadLine6>1차</HeadLine6>
          <WeplBadge className="rounded-[4px] bg-primary-100 hover:bg-primary-100  w-52 text-primary-500 ">
            일정 등록
          </WeplBadge>
          <WeplBadge className="rounded-[4px] bg-semantic-error-100 hover:bg-semantic-error-100 w-52 text-semantic-error-600">
            지출 완료
          </WeplBadge>
        </div>
        <div>
          <button onClick={onOpenButton}>
            <Icon name="more" size={24} />
          </button>
        </div>
      </div>
      <div className="mt-16 border-t-[1px] border-b-[1px] border-gray-100">
        <SmallCategoryCardItem
          isBorder
          itemName="일정명"
          itemValue="웨딩홀 계약금 이체"
          itemValueColor="text-auxiliary-blue"
        />
        <SmallCategoryCardItem itemName="지출액" itemValue={Number(3000000).toLocaleString() + '원'} />
      </div>
      {/* Checks */}
      <div className="mt-16">
        <div className="flex items-center gap-4 cursor-pointer">
          {false ? (
            <Image src="/spending/checkbox-on-24.png" alt="check-on" width={24} height={24} />
          ) : (
            <Image src="/spending/checkbox-off-24.png" alt="check-off" width={24} height={24} />
          )}
          <TextBody2 className="text-gray-600">일정 등록하기</TextBody2>
        </div>
        <div className="mt-4 flex items-center gap-4 cursor-pointer">
          {true ? (
            <Image src="/spending/checkbox-on-24.png" alt="check-on" width={24} height={24} />
          ) : (
            <Image src="/spending/checkbox-off-24.png" alt="check-off" width={24} height={24} />
          )}
          <TextBody2 className="text-gray-600">지출 완료하기</TextBody2>
        </div>
      </div>

      {/* 바텀 시트 */}
      <BottomSheet
        isOpen={openBottomSheet}
        title="1차 지출 정보"
        onClose={() => setOpenBottomSheet(false)}
        menus={
          <div className="px-24">
            <SubTitle2 className="py-16 text-gray-700 cursor-pointer">일정등록</SubTitle2>
            <SubTitle2 className="py-16 text-gray-700 cursor-pointer">지출 완료 취소</SubTitle2>
            <Link href={`${pathname}/spendingForm`}>
              <SubTitle2 className="py-16 text-gray-700 cursor-pointer">정보 수정</SubTitle2>
            </Link>
            <SubTitle2 className="py-16 text-gray-700 cursor-pointer">지출 삭제</SubTitle2>
          </div>
        }
      />
    </div>
  );
};

export default SmallCategoryCard;

const SmallCategoryCardItem = ({
  isBorder,
  className,
  itemName,
  itemValue,
  itemValueColor,
}: {
  isBorder?: boolean;
  className?: string;
  itemName: string;
  itemValue: string;
  itemValueColor?: `text-${string}`;
}) => {
  return (
    <div
      className={cn('flex items-center py-12', { 'border-b-[1px] border-dashed border-gray-100': isBorder }, className)}
    >
      <TextBody2 className={'basis-56 text-gray-500'}>{itemName}</TextBody2>
      <SubTitle3 className={cn('text-gray-700', itemValueColor)}>{itemValue}</SubTitle3>
    </div>
  );
};
