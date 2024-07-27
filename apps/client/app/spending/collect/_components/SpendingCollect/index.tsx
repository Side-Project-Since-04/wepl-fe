'use client';

import { useState } from 'react';
import { Skeleton } from '@ui/src/Skeleton';
import type { TabNameType, TabType } from '@/src/features/spending/types';
import AsyncBoundary from '@/src/shared/components/AsyncBoundary';
import { Tabs } from '../Tabs';
import { SpendingStatistic } from '../SpendingStatistic';
import { SpendingHistory } from '../SpendingHistory';

const TABS: TabType[] = [
  { name: 'statistic', guide: '지출 통계' },
  { name: 'history', guide: '지출 내역' },
];

const SpendingCollect = () => {
  const [selectedTabName, setSelectedTabName] = useState<TabNameType>('statistic');

  return (
    <>
      <Tabs onChangeTabName={setSelectedTabName} selectedTabName={selectedTabName} tabs={TABS} />
      {selectedTabName === 'statistic' && (
        <AsyncBoundary SuspenseFallback={<Skeleton className="min-h-screen" />}>
          <SpendingStatistic />
        </AsyncBoundary>
      )}
      {selectedTabName === 'history' && (
        <AsyncBoundary SuspenseFallback={<Skeleton className="min-h-screen" />}>
          <SpendingHistory />
        </AsyncBoundary>
      )}
    </>
  );
};

export default SpendingCollect;
