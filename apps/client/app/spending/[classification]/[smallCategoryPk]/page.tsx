'use client';

import { SmallCategoryName } from './components/SmallCategoryName';
import SmallCategoryCard from './components/SmallCategoryCard';
import { SpendingHeader } from '@/src/widgets/spending/common/SpendingHeader';
import { usePathname, useRouter } from 'next/navigation';

interface SmallCategoryPageProps {}

const SmallCategoryPage = ({}: SmallCategoryPageProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClickText = () => {
    const query = `?categoryName=${'대관료'}`;

    router.push(pathname + '/edit' + query);
  };

  return (
    <main>
      <SpendingHeader disabled={false} title="지출 상세 내역" text="수정" onClickText={handleClickText} />
      <section>
        <SmallCategoryName pathname={pathname!} />
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

export default SmallCategoryPage;
