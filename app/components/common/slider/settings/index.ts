import clsx from "clsx";
import { Navigation, Pagination} from 'swiper/modules'
import { SwiperProps } from "swiper/react";



export const swiperCfg: SwiperProps = {
  autoplay: true,
  loop: true,
  spaceBetween: 20,
  dir: "rtl",
  slidesPerView: "auto",
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1280: {
      slidesPerView: 6,
    },
  },
};

export const btnStyle = {
  prev: clsx("cursor-pointer select-none absolute -right-14 rotate-180 z-50 top-0 bottom-0 my-auto! size-[36px]!  text-gray-100 bg-white! rounded-full flex-center"),
  next: clsx("cursor-pointer select-none absolute -left-14 z-50 top-0 bottom-0 my-auto! size-[36px]!  text-gray-100 bg-white! rounded-full flex-center")
}