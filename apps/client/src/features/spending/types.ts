export interface TabType {
  name: TabNameType;
  guide: string;
}
export type TabNameType = 'statistic' | 'history';

export type SpendingDataType = {
  smallCategoryPk: string;
  cost: number;
  paidAt: string;
  scheduleName: string;
  scheduleStartedAt?: number;
  scheduleEndedAt?: number;
  memo?: string;
};
