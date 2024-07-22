'use client';

import { MiddleCategoryName } from './components/MiddleCategoryName';
import SmallCategoryCard from './components/SmallCategoryCard';
import { SpendingHeader } from '@/src/widgets/spending/common/SpendingHeader';

interface MiddleCategoryPageProps {
  params: any;
}

const MiddleCategoryPage = ({ params }: MiddleCategoryPageProps) => {
  return (
    <main>
      <SpendingHeader disabled={false} text="수정" onClickText={() => {}} />
      <section>
        <MiddleCategoryName />
      </section>
      <section>
        <ul>
          <SmallCategoryCard />
          <SmallCategoryCard />
        </ul>
      </section>
    </main>
  );
};

export default MiddleCategoryPage;
