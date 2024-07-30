'use client';

import { usePathname, useRouter } from 'next/navigation';
import { SpendingHeader } from '@/src/widgets/spending/common/SpendingHeader';
import { SmallCategoryName } from './_components/SmallCategoryName';
import SmallCategoryCard from './_components/SmallCategoryCard';

interface SmallCategoryPageProps {}

const SmallCategoryPage = ({}: SmallCategoryPageProps) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClickText = () => {
    const query = `?categoryName=대관료`;

    router.push(`${pathname}/edit${query}`);
  };

  return (
    <main>
      <SpendingHeader disabled={false} onClickText={handleClickText} text="수정" title="지출 상세 내역" />
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
