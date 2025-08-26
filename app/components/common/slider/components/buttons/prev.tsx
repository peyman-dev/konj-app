import React from "react";
import { useSwiperStore } from "../../settings/store";
import { btnStyle } from "../../settings";
import { ChevronLeft } from "lucide-react";

const PreviousButton = () => {
  const swiper: any = useSwiperStore();

  return (
    <div className={btnStyle.prev} onClick={() => swiper.hook?.slidePrev()}>
      <ChevronLeft />
    </div>
  );
};

export default PreviousButton;
