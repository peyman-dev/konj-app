import React, { ReactNode } from "react";
import clsx from "clsx";
import settings from "./settings";
import { ButtonProps } from "@mui/joy";
import { Button as UIButton } from "@mui/joy";

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
