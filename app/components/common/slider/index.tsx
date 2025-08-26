"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { swiperCfg } from "./settings";
import NextButton from "./components/buttons/next";
import HookSetter from "./components/hook-setter";
import PreviousButton from "./components/buttons/prev";

const ProductsSlider = ({
  items,
  RenderComponent,
}: {
  items: any[];
  RenderComponent: React.FC;
}) => {
  return (
    <>
      <PreviousButton />
      <Swiper {...swiperCfg}>
        {items.map((item) => (
          <SwiperSlide key={item.id as string}>
            <RenderComponent {...item} />
          </SwiperSlide>
        ))}
        <HookSetter />
      </Swiper>
      <NextButton />
    </>
  );
};

export default ProductsSlider;
