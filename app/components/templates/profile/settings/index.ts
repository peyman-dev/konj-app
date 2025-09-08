import clsx from "clsx";
import { TabProps } from "./types";

export const setDynamicStyles = ({ isMobileTab }: TabProps) => {
  return clsx(
    "md:px-8 px-2 py-0 max-h-max  md:py-10.5 bg-white rounded-[8px] w-full! grow",
    isMobileTab ? "" : "hidden invisible md:flow-root md:visible"
  );
};
