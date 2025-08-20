
import Container from "@/app/components/ui/container";
import React from "react";
import UnderHeroItem from "./item";
import { items } from "./settings";

const UnderHero = () => {
  return (
    <Container className="my-[72px] grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {
          items.map((d, i) => <UnderHeroItem {...d} key={crypto.randomUUID()}/>)
        }
    </Container>
  );
};

export default UnderHero;
