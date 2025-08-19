import Image from "next/image";
import React from "react";
import LibrarySvg from "@/svg/library.svg";

const MyLibrary = () => {
  return (
    <div className="text-primary-700 cursor-pointer border px-3 rounded-[8px] min-w-max border-[#C3C3C3]! duration-150 active:bg-[#744D7E]/20! flex-center gap-2 h-12">
      <div>
      <Image src={LibrarySvg.src} width={20} height={20} alt="کتابخانه" />
      </div>
        کتابخانه من
    </div>
  );
};

export default MyLibrary;
