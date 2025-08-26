import clsx from "clsx";
import Image, { ImageProps } from "next/image";
import React from "react";

const ProductHeader = ({ ...props }: ImageProps) => {
  return (
    <header className="bg-gray-20 flex-center h-[270px] relative p-9">
      <Image
        className={clsx(props?.className, "rounded-sm")}
        src={props.src}
        width={125}
        objectFit="cover"
        height={198}
        alt={props.alt}
      />
    </header>
  );
};

export default ProductHeader;
