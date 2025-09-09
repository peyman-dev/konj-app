import React from "react";
import { Input as HeroInput, InputProps } from "@heroui/input";

const Input = ({ ...rest }: InputProps) => {
  return (
    <React.Fragment>
      <HeroInput
      
        variant="flat"
        color="danger"
        {...rest}
      />
    </React.Fragment>
  );
};

export default Input;
