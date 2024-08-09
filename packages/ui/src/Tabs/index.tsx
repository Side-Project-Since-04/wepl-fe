'use client';

import React, { useState } from 'react';
import { cn } from '@ui/lib/utils';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../shadcn-ui/tabs';

interface TabItem {
  label: string;
  content: React.ReactNode;
}

interface WeplTabsProps {
  items: TabItem[];
  defaultValue?: string;
  className?: string;
  tabsListClassName?: string;
  tabsTriggerClassName?: string;
  tabsContentClassName?: string;
  sliderSettings?: object;
}

export const WeplTabs: React.FC<WeplTabsProps> = ({
  items,
  defaultValue,
  className,
  tabsListClassName,
  tabsTriggerClassName,
  tabsContentClassName,
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue || items[0]?.label);

  return (
    <Tabs className={cn('w-full', className)} onValueChange={setActiveTab} value={activeTab}>
      <TabsList className={cn(tabsListClassName)}>
        {items.map((item) => (
          <TabsTrigger className={cn(tabsTriggerClassName)} key={item.label} value={item.label}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent className={tabsContentClassName} key={item.label} value={item.label}>
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};
