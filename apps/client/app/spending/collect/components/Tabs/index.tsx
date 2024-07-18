import { TabTypeNamespace } from '../../page';
import { Tab } from '../Tab';

interface TabsProps {
  tabs: TabTypeNamespace.Tabs;
  selectedTabType: TabTypeNamespace.TabType;
  onChangeTabType: (type: TabTypeNamespace.TabType) => void;
}

export function Tabs({ tabs, selectedTabType, onChangeTabType }: TabsProps) {
  return (
    <div className="px-8 border-b-[1px] border-b-gray-100 h-48">
      {tabs.map((tab) => (
        <Tab isSelected={tab.type === selectedTabType} tab={tab} onClick={onChangeTabType} />
      ))}
    </div>
  );
}
