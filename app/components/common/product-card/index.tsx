"use client";
import React from "react";
import ProductHeader from "./components/header";
import Details from "./components/details";
import Footer from "./components/footer";
import Link from "next/link";
import useRedirector from "@/app/core/hooks/use-redirector";
import Redirector from "./components/redirector";
import Redirecting from "../../ui/loadings/redirecting";

const ProductCard = () => {
  const { isLoading, redirectToUrl, RedirectorContainer } = useRedirector();

  return (
    <RedirectorContainer>
      <article
        onClick={() => redirectToUrl("/explore/book/example-book")}
        className="min-w-[197px]! relative cursor-pointer rounded-sm overflow-hidden bg-white"
      >
        {/* <Redirector isLoading={isLoading}/> */}
        <ProductHeader src={"/images/book.png"} alt="تصویر محصول" />
        <Details />
        <Footer />
      </article>
    </RedirectorContainer>
  );
};

export default ProductCard;
