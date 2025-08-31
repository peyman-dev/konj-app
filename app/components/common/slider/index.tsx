"use client";
import React, { Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { swiperCfg } from "./settings";
import NextButton from "./components/buttons/next";
import HookSetter from "./components/hook-setter";
import PreviousButton from "./components/buttons/prev";
import ProductCard from "../product-card";

// Define the shape of an item
interface Item {
  id: string;
  [key: string]: any; // Adjust based on your actual item structure
}

// Define props for ProductsSlider
interface ProductsSliderProps {
  items: Item[];
  RenderComponent?: React.FC<Item>;
}

const ProductsSlider = ({ items, RenderComponent }: ProductsSliderProps) => {
  return (
    <div className="relative select-none">
      <PreviousButton />
      <Swiper {...swiperCfg}>
        {items?.map((item) => (
          <SwiperSlide key={item.id}>
            {RenderComponent ? <RenderComponent {...item} /> : <ProductCard />}
          </SwiperSlide>
        ))}
        <HookSetter />
      </Swiper>
      <NextButton />
    </div>
  );
};

export default ProductsSlider;
