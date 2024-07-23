import { WeplButton } from '@/src/shared/components/Button/WeplButton';
import { HeadLine4 } from '@ui/src/components/HeadLine';
import { TextBody1 } from '@ui/src/components/Text';
import Link from 'next/link';

interface SmallCategoryNameProps {
  pathname: string;
}

export const SmallCategoryName = ({ pathname }: SmallCategoryNameProps) => {
  return (
    <div className="bg-gray-50 pt-32 px-30 pb-42 text-center">
      <div>
        <TextBody1 className="text-gray-500">본식/웨딩홀</TextBody1>
        <HeadLine4 className="mt-4">대관료</HeadLine4>
      </div>
      <div className="mt-16">
        <Link href={pathname + '/add'}>
          <WeplButton className="bg-primary-400 hover:bg-primary-500 w-full text-neutral-white text-[15px]" size="sm">
            지출 추가하기
          </WeplButton>
        </Link>
      </div>
    </div>
  );
};
