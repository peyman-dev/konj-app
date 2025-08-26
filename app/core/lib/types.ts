export interface UnderHeroItemType {
  src: string;
  href: `/explore/${string}`;
  title: string;
}

interface Translator {
  name: string;
  id: string;
}

interface Author {
  name: string;
  id: string;
}

interface Category {
  title: string;
  id: string;
}

interface PriceList {
  offPercent: number;
  price: number;
  finalPrice: number;
}

interface Variants {
  downloadable: boolean;
  type: "TEXT_BOOK" | "AUDIO_BOOK" ; // در صورت وجود انواع دیگر، می‌توانید گسترش دهید
  publishedDate: string;
  papersCount: number;
  vocalist: string | null;
  translator: Translator | null;
}

export interface Book {
  id: string;
  title: string;
  href: string;
  priceList: PriceList;
  category: Category;
  author: Author;
  description: string;
  variants: Variants;
  alternatives?: [] | Book[]; // برای آرایه‌ی alternatives که شامل کتاب‌های دیگر است
}
