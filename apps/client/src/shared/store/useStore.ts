// src/store/useStore.ts
import { create } from 'zustand';

export type SpendingItemType = {
  smallCategoryPk: string;
  cost: string;
  order: number;
  isScheduled: boolean;
  isPaid: boolean;
  scheduleName: string;
  scheduleStartedAt: string; // ISO date strings are represented as strings
  scheduleEndedAt: string;
  paidAt: Date;
  memo: string;
};

interface SpendingItemState {
  item: SpendingItemType | undefined;
  set: (item: SpendingItemType) => void;
}

const useSpendingStore = create<SpendingItemState>((set) => ({
  item: undefined,
  set: (newItem: SpendingItemType) => set((state) => ({ ...state, item: newItem })),
}));

export { useSpendingStore };
