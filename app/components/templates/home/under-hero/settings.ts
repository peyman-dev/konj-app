import { UnderHeroItemType } from "@/app/core/lib/types";
import AudioBook from "@/svg/Audiobook.svg"
import ReadBook from "@/svg/cat-book.svg"
import Historical from "@/svg/history.svg"
import Psychology from "@/svg/science.svg"
import Novel from "@/svg/novel.svg"

export const items: UnderHeroItemType[] = [
  {
    src: AudioBook.src as string,
    href: "/explore/audio-books",
    title: "کتاب صوتی",
  },
  {
    href: "/explore/books",
    src: ReadBook.src as string,
    title: "کتاب متنی",
  },
  {
    href: "/explore/history-books",
    src: Historical.src as string,
    title: "کتاب تاریخی"
  },
  {
    href: "/explore/psychology",
    src: Psychology.src as string,
    title: "روانشناسی"
  },
  {
    href: "/explore/romance",
    src: Novel.src as string,
    title: "رمان خارجی"
  }
];
