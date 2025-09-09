type GridEnum = "TABLE" | "GRID";
type TabsEnum = "ALL_BOOKS" | "BOUGHT_BOOKS" | "DELETED_BOOKS";
type FiltersEnum = "BOUGHT_BOOKS" | "EXAMPLE_VERSION" | "RED_BOOKS";
type SortEnum = "NEWEST" | "OLDEST";

export interface IStoreProps {
  gridLayout: GridEnum;
  setGridLayout: (type: GridEnum) => void;

  currentTab: TabsEnum;
  setCurrentTab: (tab: TabsEnum) => void;

  sortBy: SortEnum;
  setSortBy: (SortBy: SortEnum) => void;

  filter: FiltersEnum;
  setFilter: (filter: FiltersEnum) => void;

  initialItems?: any[];
  setInitialItems?: (items: any[]) => void;
}

export type IFilterProps = {
  id: TabsEnum,
  title: string,

}