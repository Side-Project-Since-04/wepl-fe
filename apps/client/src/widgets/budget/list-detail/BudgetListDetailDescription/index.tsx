import { FURNITURE, HONEYMOON, PRESENT, WEDDING } from '@/src/shared/constants/classification';
import { Classification } from '@/src/shared/types/classification';

interface BudgetListDetailDescriptionProps {
  classification: Lowercase<Classification>;
  order: string;
}

const INFOS = {
  [WEDDING]: {
    name: '웨딩',
    description: '웨딩웨딩\n하이하이',
  },
  [PRESENT]: {
    name: '예물',
    description: '예물예물\n반가반가',
  },
  [FURNITURE]: {
    name: '혼수',
    description: '웨딩에는 웨딩홀, 피팅비, 헬퍼비, 본식스냅 등 모든것이\n포함된 금액을 작성해주시면 됩니다.',
  },
  [HONEYMOON]: {
    name: '신혼여행',
    description: '여행여행\n즐거즐거',
  },
};

export default function BudgetListDetailDescription({ classification, order }: BudgetListDetailDescriptionProps) {
  return (
    <div>
      <div className="flex items-center">
        <span className="inline-block w-18 h-18 bg-primary-500 rounded-4 text-center font-bold text-gray-50 text-[12px]">
          {order}
        </span>
        <span className="ml-8 text-gray-800 text-headline5">{INFOS[classification].name}</span>
      </div>
      <div className="mt-8 text-gray-500 text-body2 whitespace-pre-wrap">{INFOS[classification].description}</div>
    </div>
  );
}
