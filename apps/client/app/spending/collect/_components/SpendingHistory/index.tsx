import { useState } from 'react';
import { cn } from '@ui/lib/utils';
import { SubTitle2 } from '@ui/src/components/Text';
import { HeadLine4 } from '@ui/src/components/HeadLine';
import { classNames } from '@/src/shared/ui/utils';
import { useSuspenseGetClassifications } from '@/src/features/category/queries';
import type { ClassificationType } from '@/src/features/category/types';
import { Divider } from '@/src/shared/components/Divider';
import Chip from '../Chip';

export const SpendingHistory = () => {
  const { data } = useSuspenseGetClassifications();
  const [filteredClassificationName, setFilteredClassificationName] = useState<string | undefined>();

  const classifications = data.content.map((value) => value);
  const filteredClassification = classifications.filter((value) => value.name === filteredClassificationName);

  return (
    <section>
      <section className={cn('py-12 flex gap-8', classNames.pagePadding)}>
        <Chip
          isSelected={!filteredClassificationName}
          name="전체"
          onClick={() => {
            setFilteredClassificationName(undefined);
          }}
        />
        {classifications.map(({ name, guide }) => (
          <Chip
            isSelected={name === filteredClassificationName}
            key={name}
            name={guide}
            onClick={() => {
              setFilteredClassificationName(name);
            }}
          />
        ))}
      </section>
      <section className="py-24">
        {!filteredClassificationName ? (
          classifications.map((classification, idx) => {
            if (idx !== classifications.length - 1) {
              return (
                <>
                  <SpendingHistoryItem
                    classification={classification}
                    filteredClassification={undefined}
                    key={classification.id}
                  />
                  <div className="py-40">
                    <Divider />
                  </div>
                </>
              );
            }

            return (
              <SpendingHistoryItem
                classification={classification}
                filteredClassification={undefined}
                key={classification.id}
              />
            );
          })
        ) : (
          <SpendingHistoryItem
            classification={filteredClassification[0]}
            filteredClassification={filteredClassificationName}
          />
        )}
      </section>
    </section>
  );
};

/**
 * 지출내역 항목
 */
interface SpendingHistoryItemProps {
  filteredClassification: string | undefined;
  classification: ClassificationType;
}

const SpendingHistoryItem = ({ filteredClassification, classification }: SpendingHistoryItemProps) => {
  const { middleCategories, paidSpending } = classification;

  return (
    <div className={classNames.pagePadding}>
      {/* 대분류 총 지출금액 */}
      <div className="text-gray-800">
        <SubTitle2>
          {filteredClassification ? (
            <span>총 결제 금액</span>
          ) : (
            <span>
              <span className="text-primary-400">{classification.guide}</span>
              <span> </span>
              <span>결제 금액</span>
            </span>
          )}
        </SubTitle2>
        <HeadLine4>{paidSpending.toLocaleString()}원</HeadLine4>
      </div>
      {/* 중분류 메뉴별 지출금액 */}
      {middleCategories.map((value) => (
        <div className="mt-16 border-t-[1px] border-gray-100" key={value.pk}>
          <div
            className="flex justify-between py-12 border-b-[1px] border-dashed border-gray-100 text-body2 text-gray-500 font-normal"
            key={value.pk}
          >
            <span>{value.name}</span>
            <span>{value.spending.toLocaleString()}</span>
          </div>
        </div>
      ))}
    </div>
  );
};
