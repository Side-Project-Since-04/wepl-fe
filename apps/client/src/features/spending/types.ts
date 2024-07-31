export interface TabType {
  name: TabNameType;
  guide: string;
}
export type TabNameType = 'statistic' | 'history';

export interface Spending {
  spendingPk: string;
  cost: number;
  paidAt: string;
  expectedPaidAt: string;
  scheduleName: string;
  scheduleStartedAt: string;
  scheduleEndedAt: string;
  isScheduled: boolean;
  memo: string;
  paid: boolean;
}
