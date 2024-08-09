'use client';

import WeplBadge from '@ui/src/Badge';
import { BottomSheet } from '@ui/src/BottomSheet';
import { HeadLine6 } from '@ui/src/components/HeadLine';
import { SubTitle2, TextBody2 } from '@ui/src/components/Text';
import Icon from '@ui/src/Icon';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ButtonHTMLAttributes } from 'react';
import { useMemo, useState } from 'react';
import { cn } from '@ui/lib/utils';
import { useSpendingStore } from '@/src/features/spending/store';
import type { SpendingType } from '@/src/features/spending/types';
import { useDeleteSpending, useUpdateSpending } from '@/src/features/spending/queries';
import { formatSpendingPaidAtDate, formatSpendingPaidAtTime } from '@/src/shared/utils/utils';
import { SmallCategoryDetailSpendingItem } from '../SmallCategoryDetailSpendingItem';

interface SmallCategoryDetailSpendingProps {
  spending: SpendingType;
  order: number;
}

export const SmallCategoryDetailSpending = ({ spending, order }: SmallCategoryDetailSpendingProps) => {
  const pathname = usePathname();
  const [openBottomSheet, setOpenBottomSheet] = useState(false);

  const { mutate: updateSpending, isPending: isPendingUpdateSpending } = useUpdateSpending();
  const { mutate: deleteSpending, isPending: isPendingDeleteSpending } = useDeleteSpending();
  const { setSpendingItem: setSpending } = useSpendingStore();

  const handleOpenBottomSheet = () => {
    setOpenBottomSheet(true);
    setSpending(spending);
  };

  const items = useMemo(() => {
    const { scheduleName, cost, paidAt, scheduleStartedAt, scheduleEndedAt, memo } = spending;

    return [
      { name: '일정명', value: scheduleName },
      { name: '지출액', value: `${cost.toLocaleString()}원` },
      { name: '지출일', value: formatSpendingPaidAtDate(paidAt) },
      {
        name: '시간',
        value:
          scheduleStartedAt && scheduleEndedAt ? formatSpendingPaidAtTime(scheduleStartedAt, scheduleEndedAt) : null,
      },
      { name: '메모', value: memo },
    ].filter((item: { name: string; value: string | null }): item is { name: string; value: string } =>
      Boolean(item.value),
    );
  }, [spending]);

  const isPendingApi = isPendingDeleteSpending || isPendingUpdateSpending;

  return (
    <div className="py-40 px-30">
      <div className="flex justify-between items-center">
        <div className="flex gap-6 items-center">
          <HeadLine6>{order}차</HeadLine6>
          {spending.isScheduled ? (
            <WeplBadge className="rounded-[4px] bg-primary-100 hover:bg-primary-100  w-52 text-primary-500 ">
              일정 등록
            </WeplBadge>
          ) : null}
          {spending.isPaid ? (
            <WeplBadge className="rounded-[4px] bg-semantic-error-100 hover:bg-semantic-error-100 w-52 text-semantic-error-600">
              지출 완료
            </WeplBadge>
          ) : null}
        </div>
        <div>
          <button onClick={handleOpenBottomSheet} type="button">
            <Icon name="more" size={24} />
          </button>
        </div>
      </div>
      <div className="mt-16 border-t-[1px] border-b-[1px] border-gray-100">
        {items.map((item, idx) => (
          <SmallCategoryDetailSpendingItem
            isBorder={idx !== items.length - 1}
            itemName={item.name}
            itemValue={item.value}
            itemValueColor={idx === 0 ? 'text-auxiliary-blue' : 'text-gray-700'}
            key={item.name}
          />
        ))}
      </div>

      {/* 체크박스s */}
      <div className="mt-16">
        <button
          className="flex items-center gap-4"
          disabled={isPendingApi}
          onClick={() => {
            updateSpending({
              spendingPk: spending.spendingPk,
              spendingInput: { ...spending, isScheduled: !spending.isScheduled },
            });
          }}
          type="button"
        >
          {spending.isScheduled ? (
            <Image alt="check-on" height={24} src="/spending/checkbox-on-24.png" width={24} />
          ) : (
            <Image alt="check-off" height={24} src="/spending/checkbox-off-24.png" width={24} />
          )}
          <TextBody2
            className={cn('text-gray-600', {
              'text-gray-400': isPendingApi,
            })}
          >
            일정 등록하기
          </TextBody2>
        </button>
        <button
          className="mt-4 flex items-center gap-4"
          disabled={isPendingApi}
          onClick={() => {
            updateSpending({
              spendingPk: spending.spendingPk,
              spendingInput: { ...spending, isPaid: !spending.isPaid },
            });
          }}
          type="button"
        >
          {spending.isPaid ? (
            <Image alt="check-on" height={24} src="/spending/checkbox-on-24.png" width={24} />
          ) : (
            <Image alt="check-off" height={24} src="/spending/checkbox-off-24.png" width={24} />
          )}
          <TextBody2
            className={cn('text-gray-600', {
              'text-gray-400': isPendingApi,
            })}
          >
            지출 완료하기
          </TextBody2>
        </button>
      </div>

      <BottomSheet
        isOpen={openBottomSheet}
        menus={
          <div className="px-24 flex flex-col">
            <BottomSheetMenuButton
              disabled={isPendingApi}
              onClick={() => {
                updateSpending({
                  spendingPk: spending.spendingPk,
                  spendingInput: { ...spending, isScheduled: !spending.isScheduled },
                });
              }}
            >
              {spending.isScheduled ? '일정등록 취소' : '일정등록'}
            </BottomSheetMenuButton>
            <BottomSheetMenuButton
              disabled={isPendingApi}
              onClick={() => {
                updateSpending({
                  spendingPk: spending.spendingPk,
                  spendingInput: { ...spending, isPaid: !spending.isPaid },
                });
              }}
            >
              {spending.isPaid ? '지출 완료 취소' : '지출 완료'}
            </BottomSheetMenuButton>
            <BottomSheetMenuButton disabled={isPendingApi}>
              <Link href={`${pathname}/${spending.spendingPk}/spendingEdit`}>
                <SubTitle2
                  className={cn('py-16 text-gray-700 text-left hover:text-auxiliary-blue', {
                    'text-gray-400 hover:text-gray-400': isPendingApi,
                  })}
                >
                  정보 수정
                </SubTitle2>
              </Link>
            </BottomSheetMenuButton>
            <BottomSheetMenuButton
              disabled={isPendingApi}
              onClick={() => {
                deleteSpending({ spendingPk: spending.spendingPk });
              }}
            >
              지출 삭제
            </BottomSheetMenuButton>
          </div>
        }
        onClose={() => {
          setOpenBottomSheet(false);
        }}
        title="1차 지출 정보"
      />
    </div>
  );
};

// 바텀시트 메뉴
const BottomSheetMenuButton = ({
  children,
  ...buttonProps
}: { children: React.ReactNode } & ButtonHTMLAttributes<HTMLButtonElement>) => {
  if (!children) {
    return null;
  }

  if (typeof children === 'string') {
    return (
      <button type="button" {...buttonProps}>
        <SubTitle2
          className={cn('py-16 text-gray-700 text-left hover:text-auxiliary-blue', {
            'text-gray-400 hover:text-gray-400': buttonProps.disabled,
          })}
        >
          {children}
        </SubTitle2>
      </button>
    );
  }

  return (
    <button type="button" {...buttonProps}>
      {children}
    </button>
  );
};
