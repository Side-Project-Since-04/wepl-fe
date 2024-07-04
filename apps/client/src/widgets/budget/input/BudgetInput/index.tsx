import { useCallback } from 'react';

interface BudgetInputProps {
  budget: number;
  onChange: React.Dispatch<React.SetStateAction<number>>;
}

export default function BudgetInput({ budget, onChange }: BudgetInputProps) {
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value.replace(/[^0-9,]/g, '');
      const number = Number(value.replaceAll(',', ''));

      // 입력값(결혼비용)이 1조보다 크면 무시
      if (number > 10e11) return;

      onChange(number);
    },
    [onChange],
  );

  return (
    <div className="flex items-center text-headline3">
      <input
        type="text"
        value={budget > 0 ? budget.toLocaleString() : ''}
        className="outline-none placeholder:text-gray-200"
        style={{
          /**
           * width는 폰트숫자 0의 가로크기 * 글자 수로 결정
           * 가로크기가 애매해서 0.5ch 만큼 추가
           */
          width: budget > 0 ? String(budget).length + 0.5 + 'ch' : '100%',
        }}
        placeholder="예산을 입력해주세요"
        onChange={handleChange}
      />
      <span>{budget && budget >= 0 ? '원' : ''}</span>
    </div>
  );
}
