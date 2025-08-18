import React, { ReactNode } from "react";
import { ButtonProps, Button as UIButton } from "@heroui/button";
import clsx from "clsx";
import settings from "./settings";

interface IProps extends ButtonProps {
  children: ReactNode;
  interfaceColor: "primary" | "secondary" | "tertiary" | "destructive";
}

const Button = ({ children, interfaceColor, ...rest }: IProps) => {


  return (
    <UIButton {...rest} className={clsx(settings.applyTheme(interfaceColor))}>
      {children}
    </UIButton>
  );
};

export default Button;
