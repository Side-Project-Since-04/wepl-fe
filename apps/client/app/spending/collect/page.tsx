'use client';

import BackHeader from '@/src/shared/components/BackHeader';
import { useState } from 'react';
import { Tabs } from './components/Tabs';
import SpendingStatistic from './components/SpendingStatistic';
import SpendingHistory from './components/SpendingHistory';

export namespace TabTypeNamespace {
  export type Tabs = { type: TabType; name: string }[];
  export type Tab = Tabs[number];
  export type TabType = 'statistic' | 'history';
}

const TABS: TabTypeNamespace.Tabs = [
  { type: 'statistic', name: '지출 통계' },
  { type: 'history', name: '지출 내역' },
];

function SpendingCollectPage() {
  const [selectedTabType, setSelectedTabType] = useState<TabTypeNamespace.TabType>('statistic');

  return (
    <main>
      <BackHeader title="지출 관리" />
      <section>
        <Tabs tabs={TABS} selectedTabType={selectedTabType} onChangeTabType={setSelectedTabType} />
        {selectedTabType === 'statistic' && <SpendingStatistic />}
        {selectedTabType === 'history' && <SpendingHistory />}
      </section>
    </main>
  );
}

export default SpendingCollectPage;
