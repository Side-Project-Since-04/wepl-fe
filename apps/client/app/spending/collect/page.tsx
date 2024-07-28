import BackHeader from '@/src/shared/components/BackHeader';
import SpendingCollect from './_components/SpendingCollect';

const SpendingCollectPage = () => {
  return (
    <main>
      <BackHeader title="지출 관리" />
      <section>
        <SpendingCollect />
      </section>
    </main>
  );
};

export default SpendingCollectPage;
