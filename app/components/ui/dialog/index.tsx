"use client";
import useToggle from "@/app/core/hooks/use-toggle";
import React, { JSX, ReactNode } from "react";
import { isDialogTrigger } from "./settings";
import { DialogContent, Modal, ModalDialog } from "@mui/joy";

interface IProps {
  Trigger?: JSX.Element;
  children: ReactNode;
}

const Dialog = ({ Trigger, children }: IProps) => {
  const [isOpen, toggle] = useToggle();

  React.Children.map(children, (child, i) => {
    if (React.isValidElement(child)) {
      console.log(isDialogTrigger(child.props as object, "aria-description"));
    } else {
      console.log(false);
    }
  });
  return (
    <>
    
    </>
  );
};

export default Dialog;
