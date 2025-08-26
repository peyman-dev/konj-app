import React from "react";
import ProductHeader from "./components/header";
import Details from "./components/details";
import Footer from "./components/footer";

const ProductCard = () => {
  return (
    <article className="min-w-[197px]! rounded-sm overflow-hidden bg-white">
      <ProductHeader src={"/images/book.png"} alt="تصویر محصول" />
      <Details />
      <Footer />
    </article>
  );
};

export default ProductCard;
