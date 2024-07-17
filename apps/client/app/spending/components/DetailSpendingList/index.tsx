import { WEDDING_MAIN_CATEGORIES } from '@/src/shared/constants';
import Icon from '@ui/src/Icon';
import Image from 'next/image';
import Link from 'next/link';

const LIST: DetailSpendingItemProps[] = [
  {
    name: 'main_ceremony',
    middleCategories: ['웨딩홀', '스냅/DVD', '스드메', '예복', '혼주', '청첩장'],
    spending: 10000000,
    budget: 24000000,
    imgUrl: '/spending/thumb-wedding.png',
  },
  {
    name: 'wedding_gifts',
    middleCategories: [
      '가구',
      '가전제품',
      '침구류',
      '커튼',
      '욕실용품',
      '식기류',
      '정리함',
      '재택근무',
      '물품',
      '자동차',
      '유모차',
      '아기용품',
      '이것…',
    ],
    spending: 10000000,
    budget: 24000000,
    imgUrl: '/spending/thumb-present.png',
  },
  {
    name: 'marriage_articles',
    middleCategories: ['웨딩밴드', '현금/현물'],
    spending: 10000000,
    budget: 24000000,
    imgUrl: '/spending/thumb-furniture.png',
  },
  {
    name: 'honeymoon',
    middleCategories: ['항공', '숙박', '관광'],
    spending: 10000000,
    budget: 24000000,
    imgUrl: '/spending/thumb-honeymoon.png',
  },
];

function DetailSpendingList() {
  return (
    <div className="mt-32">
      {LIST.map((item: DetailSpendingItemProps) => (
        <DetailSpendingItem key={item.name} item={item} />
      ))}
    </div>
  );
}

interface DetailSpendingItemProps {
  name: 'main_ceremony' | 'wedding_gifts' | 'marriage_articles' | 'honeymoon';
  middleCategories: string[];
  spending: number;
  budget: number;
  imgUrl: string;
}

function DetailSpendingItem({ item }: { item: DetailSpendingItemProps }) {
  const { name, imgUrl, middleCategories, spending, budget } = item;

  return (
    <div className="py-24 flex gap-16 border-b-[1px] border-b-gray-100">
      <div className="basis-48">
        <Image src={imgUrl} alt="썸네일" width={48} height={48} />
      </div>
      <div className="flex-auto">
        <div className="flex items-center gap-5">
          <h6 className="text-gray-800 text-headline6">{WEDDING_MAIN_CATEGORIES[name]}</h6>
          {/* TODO: 상세 지출 페이지로 이동 */}
          <Link href={`/spending/${item.name}`}>
            <Icon name="arrow-right" size={16} />
          </Link>
        </div>
        <div className="mt-4">
          <div className="text-auxiliary-blue text-12 font-medium">{middleCategories.join(' · ')}</div>
        </div>
        <div className="mt-12 flex w-full">
          <div className="flex-auto">
            <p className="text-gray-500 text-body2">지출</p>
            <p className="text-gray-800 text-body2 text-15 font-bold">{spending.toLocaleString()}원</p>
          </div>
          <div className="flex-auto">
            <p className="text-gray-500 text-body2">예산</p>
            <p className="text-gray-800 text-body2 text-15 font-bold">{budget.toLocaleString()}원</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailSpendingList;
