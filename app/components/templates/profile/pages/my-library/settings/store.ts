import { create } from "zustand";
import { IStoreProps } from "./types";

export const useLibraryStore = create<IStoreProps>((set, get) => ({
  gridLayout: "GRID",
  setGridLayout(type) {
    set({
      gridLayout: type,
    });
  },
  currentTab: "ALL_BOOKS",
  setCurrentTab(tab) {
    set({ currentTab: tab });
  },
  filter: "BOUGHT_BOOKS",
  setFilter(filter) {
    set({ filter });
  },
  setSortBy(SortBy) {
    set({ sortBy: SortBy });
  },
  sortBy: "NEWEST",
  initialItems: [],
  setInitialItems(items) {
    set({ initialItems: items });
  },
}));
