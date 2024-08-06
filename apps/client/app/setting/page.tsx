import Header from '@ui/src/components/Header';
import { classNames } from '@/src/shared/ui/utils';
import { SettingHomeMenus } from './_components/SettingHomeMenus';
import { SettingHomeDisplay } from './_components/SettingHomeDisplay';

const SettingPage = () => {
  return (
    <main>
      <Header center="설정" className="border-b-[1px] border-gray-100" />
      <section className={classNames.pagePadding}>
        <section className="mt-32">
          <SettingHomeDisplay />
        </section>
        <section className="mt-32">
          <SettingHomeMenus />
        </section>
      </section>
    </main>
  );
};

export default SettingPage;
