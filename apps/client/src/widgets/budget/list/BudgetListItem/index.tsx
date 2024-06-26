import ArrowSvg from '@/public/budget/list/16-chevron-right.svg?url';

interface BudgetListItemProps {
  classification: {
    type: string;
    name: string;
  };
  order: number;
  budget: number;
}

export default function BudgetListItem({ classification, order, budget }: BudgetListItemProps) {
  return (
    <div className="bg-gray-50 rounded-8 py-14 px-16 flex justify-between cursor-pointer">
      <div className="flex items-center">
        <span className="inline-block w-18 h-18 bg-gray-600 rounded-4 text-center text-gray-50 text-[12px]">
          {order}
        </span>
        <span className="ml-6">{classification.name}</span>
      </div>
      <div className="flex items-center">
        <span className="text-sub-title1 text-gray-400">{budget}원</span>
        <span>
          <img src={ArrowSvg.src} alt="화살표" />
        </span>
      </div>
    </div>
  );
}
