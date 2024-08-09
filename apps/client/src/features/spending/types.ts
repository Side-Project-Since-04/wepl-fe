export interface TabType {
  name: TabNameType;
  guide: string;
}
export type TabNameType = 'statistic' | 'history';

export type SpendingType = {
  spendingPk: string;
  cost: number;
  expectedPaidAt: string | null;
  isPaid: boolean;
  isScheduled: boolean;
  memo: string;
  paidAt: string;
  scheduleEndedAt: string | null;
  scheduleName: string;
  scheduleStartedAt: string | null;
};

export type SpendingInputType = {
  smallCategoryPk: string;
  isPaid: boolean;
  isScheduled: boolean;
  cost: number;
  memo: string;
  paidAt: string;
  scheduleEndedAt: string | null;
  scheduleName: string;
  scheduleStartedAt: string | null;
};
