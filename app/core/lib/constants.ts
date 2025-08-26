import { Book } from "./types";

export const exampleBook: Book = {
    id: crypto.randomUUID(),
    title: "ملت عشق",
    href: "mellate-eshgh",
    priceList: {
      offPercent: 10,
      price: 250_000,
      finalPrice: 230_000,
    },
    category: {
      title: "رمان",
      id: "رمان",
    },
    author: {
      name: "پیمان احمدی",
      id: crypto.randomUUID(),
    },
    description: "یک توضیحات طولانی برای کتاب",
    variants: {
      downloadable: false,
      type: "TEXT_BOOK",
      publishedDate: "1401",
      papersCount: 341,
      vocalist: null,
      translator: {
        name: "پیمان احمدی",
        id: crypto.randomUUID(),
      },
    },
  };
  
  export const books: Book[] = Array.from({ length: 10 }, () => ({
    ...exampleBook,
    id: crypto.randomUUID(),
    author: {
      ...exampleBook.author,
      id: crypto.randomUUID(),
    },
    variants: {
      ...exampleBook.variants,
      translator: exampleBook.variants.translator
        ? {
            ...exampleBook.variants.translator,
            id: crypto.randomUUID(),
            name: exampleBook.variants.translator.name ?? "نام پیش‌فرض", // اطمینان از مقدار string
          }
        : null,
    },
  }));