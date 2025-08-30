"use client";
import React from "react";
import ProductHeader from "./components/header";
import Details from "./components/details";
import Footer from "./components/footer";
import Link from "next/link";
import useRedirector from "@/app/core/hooks/use-redirector";
import Redirector from "./components/redirector";

const ProductCard = () => {
  const [isLoading, redirect] = useRedirector();


  return (
    <article onClick={() => redirect("/explore/book/example-book")} className="min-w-[197px]! relative cursor-pointer rounded-sm overflow-hidden bg-white">
      <Redirector isLoading={isLoading}/>
      <ProductHeader src={"/images/book.png"} alt="تصویر محصول" />
      <Details />
      <Footer />
    </article>
  );
};

export default ProductCard;
