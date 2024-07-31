export interface TabType {
  name: TabNameType;
  guide: string;
}
export type TabNameType = 'statistic' | 'history';

export interface SpendingType {
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

export interface SpendingInputType {
  smallCategoryPk: string;
  cost: number;
  order: number;
  isScheduled: boolean;
  isPaid: boolean;
  scheduleName: string;
  scheduleStartedAt: Date;
  scheduleEndedAt: Date;
  paidAt: Date;
  expectedPaidAt: Date;
  memo: string;
}
