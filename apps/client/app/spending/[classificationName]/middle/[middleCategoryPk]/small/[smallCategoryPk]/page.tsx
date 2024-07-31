'use client';

import { useRouter } from 'next/navigation';
import { Skeleton } from '@ui/src/Skeleton';
import { SpendingHeader } from '@/src/widgets/spending/common/SpendingHeader';
import type { ClassificationNameType } from '@/src/features/category/types';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import { SmallCategoryName } from './_components/SmallCategoryName';
import { SmallCategoryDetailSpendings } from './_components/SmallCategoryDetailSpendings';

interface SmallCategoryPageProps {
  params: {
    classificationName: Lowercase<ClassificationNameType>;
    middleCategoryPk: string;
    smallCategoryPk: string;
  };
}

const SmallCategoryPage = ({ params }: SmallCategoryPageProps) => {
  const router = useRouter();
  const handleClickText = () => {
    router.push(
      `/spending/${params.classificationName}/middle/${params.middleCategoryPk}/small/${params.smallCategoryPk}/categoryEdit`,
    );
  };

  return (
    <main>
      <SpendingHeader disabled={false} onClickText={handleClickText} text="수정" title="지출 상세 내역" />
      <section>
        <AsyncBoundary SuspenseFallback={<Skeleton className="h-200" />}>
          <SmallCategoryName params={params} />
        </AsyncBoundary>
      </section>
      <section>
        <AsyncBoundary SuspenseFallback={<Skeleton className="h-[600px]" />}>
          <SmallCategoryDetailSpendings params={params} />
        </AsyncBoundary>
      </section>
    </main>
  );
};

export default SmallCategoryPage;
