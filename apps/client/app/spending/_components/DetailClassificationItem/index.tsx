import Image from 'next/image';
import Link from 'next/link';
import Icon from '@ui/src/Icon';
import { ClassificationType } from '@/src/features/category/types';

export interface DetailSpendingItemProps {
  classification: ClassificationType;
}

export const DetailClassificationItem = ({ classification }: DetailSpendingItemProps) => {
  const { name, guide, middleCategories, paidSpending, budget } = classification;
  const middleCategoryNames = middleCategories?.map((v) => v.name) || [];

  return (
    <Link href={`/spending/${name}`}>
      <div className="py-24 flex gap-16 border-b-[1px] border-b-gray-100">
        <div className="basis-48">
          <Image src={`/spending/thumb-${name.toLowerCase()}.png`} alt={name} width={48} height={48} />
        </div>
        <div className="flex-auto">
          <div className="flex items-center gap-5">
            <h6 className="text-gray-800 text-headline6">{guide}</h6>
            <Icon name="arrow-right" size={16} />
          </div>
          <div className="mt-4">
            <div className="text-auxiliary-blue text-12 font-medium">{middleCategoryNames.join(' · ')}</div>
          </div>
          <div className="mt-12 flex w-full">
            <div className="flex-auto">
              <p className="text-gray-500 text-body2">지출</p>
              <p className="text-gray-800 text-body2 text-15 font-bold">{paidSpending.toLocaleString()}원</p>
            </div>
            <div className="flex-auto">
              <p className="text-gray-500 text-body2">예산</p>
              <p className="text-gray-800 text-body2 text-15 font-bold">{budget.toLocaleString()}원</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
