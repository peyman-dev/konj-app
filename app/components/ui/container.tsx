import clsx from "clsx";
import React, { HTMLAttributes } from "react";

const Container = ({ ...props }: HTMLAttributes<HTMLDivElement>) => {

  return <div {...props} className={clsx("container", props?.className)}></div>;
};

export default Container;
