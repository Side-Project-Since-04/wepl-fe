import type { TabNameType, TabType } from '@/src/features/spending/types';
import { Tab } from '../Tab';

interface TabsProps {
  tabs: TabType[];
  selectedTabName: TabNameType;
  onChangeTabName: (type: TabNameType) => void;
}

export const Tabs = ({ tabs, selectedTabName, onChangeTabName }: TabsProps) => {
  return (
    <div className="px-8 border-b-[1px] border-b-gray-100 h-48">
      {tabs.map((tab) => (
        <Tab
          isSelected={tab.name === selectedTabName}
          key={tab.name}
          onClick={() => {
            onChangeTabName(tab.name);
          }}
          tab={tab}
        />
      ))}
    </div>
  );
};
