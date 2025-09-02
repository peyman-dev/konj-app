import React from "react";
import AddToCart from "./add-to-cart";
import Description from "./description";
import Collection from "@/app/components/common/collection";
import Container from "@/app/components/ui/container";

const MainContent = () => {
  return (
    <main className="grow space-y-5">
      <AddToCart />
      <Description />
      {/* <Container>
        <Collection title="از همین گوینده بشنوید" />
      </Container> */}
    </main>
  );
};

export default MainContent;
