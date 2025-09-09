import { ALL_BOOKS, BOUGHT_BOOKS, DELETED_BOOKS } from "./constants";
import { IFilterProps } from "./types";

export const filterOptions: IFilterProps[] = [
  {
    id: BOUGHT_BOOKS,
    title: "لیست کتاب های خریداری شده"
  },
  {
    id: ALL_BOOKS,
    title: "همه کتاب های من "
  },
  {
    id: DELETED_BOOKS,
    title: "لیست کتاب های حذف شده"
  }
];
