"use client";
import React from "react";
import Title from "./title";
import ProductsSlider from "@/app/components/common/slider";
import { books } from "@/app/core/lib/constants";
import ProductCard from "@/app/components/common/product-card";
import Container from "@/app/components/ui/container";
import { Book } from "@/app/core/lib/types";

const BooksRow = ({ items, title }: {title: string, items: Book[]}) => {
  return (
    <Container className="space-y-[30px]">
      <Title title={title}href="example-books" />
      <ProductsSlider items={items || books} RenderComponent={ProductCard} />
    </Container>
  );
};

export default BooksRow;
