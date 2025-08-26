import React from "react";
import ProductHeader from "./components/header";
import Details from "./components/details";

const ProductCard = () => {
  return (
    <article className="min-w-[197px]! bg-white">
      <ProductHeader
        src={"/images/book.png"}
        alt="تصویر محصول"
      />
      <Details />
    </article>
  );
};

export default ProductCard;
