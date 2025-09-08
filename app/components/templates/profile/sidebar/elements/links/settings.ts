import UserIcon from "@/svg/profile-user.svg"
import Calendar from "@/svg/profile-calendar.svg"
import BookMark from '@/svg/bookmark.svg'
import LogOut from '@/svg/log-out.svg'
import Library from '@/svg/books-library.svg'


export const navigation = [
  {
    id: crypto.randomUUID(),
    title: "اطلاعات کاربری",
    icon: UserIcon.src,
    href: "/profile"
  },
  {
    id: crypto.randomUUID(),
    title: "کتابخانه من",
    icon: Library.src,
    href: "/profile/my-library"
  },
  {
    id: crypto.randomUUID(),
    title: "تاریخچه تراکنش ها",
    icon: Calendar.src,
    href: "/profile/transactions"
  },
  {
    id: crypto.randomUUID(),
    title: "نشان شده ها",
    icon: BookMark.src,
    href: "/profile/bookmarks"
  },
  {
    id: crypto.randomUUID(),
    title: "خروج از حساب کاربری",
    icon: LogOut.src,
    href: "#",
    action: () => {
        alert("LOG OUT")
    }
  },
];

export const isOptionalClickHandler = (actionProp: any) =>
  typeof actionProp == "function";
