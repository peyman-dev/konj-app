import React from "react";
import CTAButton from "./modules/cta-button";
import Pricing from "./modules/pricing";
import BookDetails from "./modules/details";
import { Divider } from "@mui/joy";
import BookTitle from "./modules/title";
import BookRates from "./modules/rates";
import BookImage from "./modules/image";

const AddToCart = () => {
  return (
    <div className="p-6 gap-8 flex rounded-lg bg-white">
        <BookImage />
      <div className="grow">
        <div className="flex-between">
            <BookTitle />
            <BookRates />
        </div>
        <Divider />
        <BookDetails />
        <Divider />
        <Pricing />
        <CTAButton />
      </div>
    </div>
  );
};

export default AddToCart;
