import React from "react";
import { Input as HeroInput, InputProps } from "@heroui/input";

const Input = ({ ...rest }: InputProps) => {
  return (
    <React.Fragment>
      <HeroInput
        className="w-full! space-y-1!"
        classNames={{
          input:
            "h-10! px-3! font-YekanBakh-Regular! mt-1! focus-within:ring-0! !rounded-none focus-within:outline-gray-100/30",
          label: "text-xs! mb-5! font-YekanBakh-Regular!",
        }}
        variant="flat"
        color="danger"
        {...rest}
      />
    </React.Fragment>
  );
};

export default Input;
