"use client";
import { ChevronLeft } from "lucide-react";
import React from "react";
import { useSwiper } from "swiper/react";
import { useSwiperStore } from "../../settings/store";
import { btnStyle } from "../../settings";

const NextButton = () => {
  const swiper: any = useSwiperStore();
  return (
    <div className={btnStyle.next} onClick={() => swiper.hook?.slideNext()}>
        <ChevronLeft />
    </div>
  );
};

export default NextButton;
