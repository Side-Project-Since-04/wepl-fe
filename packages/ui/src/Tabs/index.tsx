'use client';

import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../shadcn-ui/tabs';
import { cn } from '@ui/lib/utils';
import { Carousel, CarouselContent, CarouselItem } from '../Carousel';

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
  tabsTriggerClassName,
  tabsContentClassName,
  sliderSettings = {},
}) => {
  const [activeTab, setActiveTab] = useState(defaultValue || items[0]?.label);

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className={cn('w-full', className)}>
      <TabsList>
        {items.map((item) => (
          <TabsTrigger key={item.label} value={item.label} className={cn(tabsTriggerClassName)}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>
      {items.map((item) => (
        <TabsContent key={item.label} value={item.label} className={tabsContentClassName}>
          {item.content}
        </TabsContent>
      ))}
    </Tabs>
  );
};
