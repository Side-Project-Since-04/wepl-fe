// src/store/useStore.ts
import { create } from 'zustand';
import type { SpendingType } from './types';

type SpendingItemType = SpendingType | undefined;

interface SpendingItemState {
  item: SpendingItemType;
  setSpendingItem: (item: SpendingItemType) => void;
}

const useSpendingStore = create<SpendingItemState>((set) => ({
  item: undefined,
  setSpendingItem: (newItem: SpendingItemType) => {
    set((state) => ({ ...state, item: newItem }));
  },
}));

export { useSpendingStore };
