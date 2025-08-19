import React from "react";
import ShoppingCart from "@/svg/shopping-cart.svg";
import Image from "next/image";
import { Button } from "@mui/joy";
import WithParentComponent from "@/app/components/ui/hoc/with-parent-component";

const BasketDropdown = () => {
  return (
    <WithParentComponent>
      <Button
        variant="outlined"
        className="size-12! !p-0 border-[#C3C3C3]! duration-150 active:bg-[#744D7E]/20!"
      >
        <Image
          src={ShoppingCart.src}
          width={26.67}
          height={25.33}
          alt="سبد خرید"
        />
      </Button>
    </WithParentComponent>
  );
};

export default BasketDropdown;
