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

// export type SpendingFormDataType = {
//   smallCategoryPk: string;
//   cost: number;
//   paidAt: string;
//   scheduleName: string;
//   startedHour: number | null;
//   startedMin: number | null;
//   endHour: number | null;
//   endMin: number | null;
//   memo?: string;
// };
