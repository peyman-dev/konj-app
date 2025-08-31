"use client";
import Container from "@/app/components/ui/container";
import React from "react";
import BannerBg from "@/svg/Back.svg";
import Image from "next/image";

const Banner = () => {
  return (
    <Container
      style={{ backgroundImage: `url(${BannerBg.src})` }}
      className={`h-[466px]  bg-cover bg-center relative rounded-[8px] overflow-hidden`}
    >
      <div className="size-full px-10 flex items-center">
        <div className="space-y-8">
          <div className="space-y-5">
            <h3 className="font-YekanBakh-Bold text-[42px] max-w-2/3 text-white">
              مجموعه آثار جورج اورول  نویسنده سرشناس کتاب مزرعه حیوانات{" "}
            </h3>
            <p className="font-YekanBakh-Bold text-2xl text-white">فقط تا پایان زمستان با ۲۰٪ تخفیف بیشتر</p>
          </div>
          <button className="h-[57px] rounded-lg px-[35px] flex-center hover:bg-gray-800 bg-gray-950 text-white cursor-pointer!  relative z-50">
            همین حالا بخوانید
          </button>
        </div>
      </div>
      <Image
        src={"/images/writer.png"}
        className="absolute left-0 bottom-0"
        width={449}
        alt="Writer"
        height={466}
      />
    </Container>
  );
};

export default Banner;
