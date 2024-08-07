import { WeplTabs } from '@ui/src/Tabs';
import React from 'react';

const ScheduleTabView = () => {
  const items = [
    { label: '예정된 일정', content: <>??</> },
    {
      label: '완료된 일정',
      content: <div>완료된 일정</div>,
    },
  ];

  return <WeplTabs items={items} tabsContentClassName="px-20" tabsListClassName="border-t-0" />;
};

export default ScheduleTabView;
