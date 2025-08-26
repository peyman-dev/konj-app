"use client";
import React, { useEffect } from "react";
import { useSwiper } from "swiper/react";
import { useSwiperStore } from "../settings/store";

const HookSetter = () => {
  const swiper = useSwiper();
  const store = useSwiperStore();

  useEffect(() => {
    store.setHook(swiper);
  }, [swiper]);

  return null;
};

export default HookSetter;
