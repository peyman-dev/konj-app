import clsx from "clsx";
import React, { HTMLAttributes } from "react";

const Container = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={clsx("container md:w-auto w-[80%] mx-auto", props?.className)}></div>;
};

Container.BigScreen = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div {...props} className={clsx("max-w-[90%] mx-auto", props?.className)}></div>;
};

export default Container;
