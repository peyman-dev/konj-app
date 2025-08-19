"use client";
import useToggle from "@/app/core/hooks/use-toggle";
import React, { JSX, ReactNode } from "react";
import { isDialogTrigger } from "./settings";
import {
  DialogContent,
  Modal,
  ModalClose,
  ModalDialog,
  Sheet,
  Typography,
} from "@mui/joy";
import DialogTrigger from "./trigger";

interface IProps {
  Trigger?: JSX.Element;
  children: ReactNode;
  title?: string;
}

const Dialog = ({ Trigger, title, children }: IProps) => {
  const [isOpen, toggle] = useToggle();

  return (
    <React.Fragment>
      <DialogTrigger onToggle={toggle}>{Trigger}</DialogTrigger>
      <Modal
        dir="rtl"
        aria-labelledby={title || "dialog"}
        aria-describedby="a dialog "
        open={isOpen}
        onClose={() => toggle()}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          dir="rtl"
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
        >
          <div id="dialog-close-holder" className="mb-10">
            <ModalClose variant="plain" sx={{ m: 1 }} />
          </div>

          <main className="min-w-[424px]">{children}</main>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

export default Dialog;
