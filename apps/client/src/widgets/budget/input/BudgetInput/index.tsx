import { useCallback } from 'react';

// 결혼예산 최대금액은 10억
const MAX_BUDGET = 10e8;

interface BudgetInputProps {
  budget: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}

const BudgetInput = ({ budget, onChange }: BudgetInputProps) => {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/[^0-9,]/g, '');
      const number = Number(value.replaceAll(',', ''));

      if (number > MAX_BUDGET) {
        return;
      }

      onChange(number);
    },
    [onChange],
  );

  return (
    <div className="flex items-center text-headline3">
      <input
        className="outline-none placeholder:text-gray-200"
        onChange={handleChange}
        placeholder="예산을 입력해주세요"
        style={{
          /**
           * width는 폰트숫자 0의 가로크기 * 글자 수로 결정
           * 가로크기가 애매해서 1ch 만큼 추가
           */
          width: budget > 0 ? `${String(budget).length + 1}ch` : '100%',
        }}
        type="text"
        value={budget > 0 ? budget.toLocaleString() : ''}
      />
      <span>{budget && budget >= 0 ? '원' : ''}</span>
    </div>
  );
};

export default BudgetInput;
