import { Card } from '@ui/shadcn-ui/card';
import { Button } from '@ui/src/Button';
import { TextBody1 } from '@ui/src/components/Text';
import Link from 'next/link';
import { cn } from '@/src/shared/ui/utils';

interface BudgetRegisterProps {
  className?: string;
}

const BudgetRegister = ({ className }: BudgetRegisterProps) => {
  return (
    <Card className={cn('w-[320px] h-[246px] bg-gray-50 flex flex-col items-center justify-center gap-2', className)}>
      <TextBody1 className="text-gray-400 text-center">
        예산을 등록하고 <br /> 지출을 관리할 수 있어요
      </TextBody1>
      <Link href="/budget/list">
        <Button className="mt-20 h-40 w-110 bg-neutral-white text-primary-400">예산 등록하기</Button>
      </Link>
    </Card>
  );
};

export default BudgetRegister;
