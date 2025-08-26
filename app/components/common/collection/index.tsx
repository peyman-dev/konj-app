import React from "react";
import Container from "../../ui/container";
import ProductCard from "../product-card";
import ProductsSlider from "../slider";
import { books } from "@/app/core/lib/constants";

const Collection = ({
  title,
  products,
}: {
  title?: string;
  products?: any[];
}) => {
  return (
    <Container data-description="Products Collection">
      <div>
        <h3
          className="text-2xl font-YekanBakh-Bold"
          title={title}
          data-collection-name={title}
        >
          {title}
        </h3>
      </div>
      <section
        data-type="Products container"
        className="relative"
      >
        <ProductsSlider RenderComponent={ProductCard} items={books} />
      </section>
    </Container>
  );
};

export default Collection;
