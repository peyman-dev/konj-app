import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoSvg from "@/svg/logo.svg";

const Logo = () => {
  return (
    <div>
      <Link href={"/"}>
        <Image src={LogoSvg.src} width={88} height={50} alt="کنج" />
      </Link>
    </div>
  );
};

export default Logo;
