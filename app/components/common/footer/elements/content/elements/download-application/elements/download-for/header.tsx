import Logo from "@/app/components/common/header/components/logo";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-primary-700! flex-between!">
      <Logo />
      <Link href={"#"} className="flex-center font-Farhang-Medium!">
        <span>دانلود اپلیکیشن</span>
        <ChevronLeft className="size-4" />
      </Link>
    </header>
  );
};

export default Header;
