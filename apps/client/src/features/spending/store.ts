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
  setSpendingItem: (item: SpendingItemType) => void;
}

const useSpendingStore = create<SpendingItemState>((set) => ({
  item: undefined,
  setSpendingItem: (newItem: SpendingItemType) => set((state) => ({ ...state, item: newItem })),
}));

export { useSpendingStore };
