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
  scheduleStartedAt?: string;
  scheduleEndedAt?: string;
  memo?: string;
  order?: number; // 나중에 삭제 시킬 예정
};
