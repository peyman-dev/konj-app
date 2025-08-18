"use client";
import useToggle from "@/app/core/hooks/use-toggle";
import React, { JSX, ReactNode } from "react";
import { isDialogTrigger } from "./settings";
import { DialogContent, Modal, ModalDialog, Sheet, Typography } from "@mui/joy";
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
      <Modal open={isOpen} onClose={() => toggle()}>
        <Sheet
          variant="outlined"
          sx={{ maxWidth: 500, borderRadius: "md", p: 3, boxShadow: "lg" }}
        >
          <header>
            {String(title) && (
              <Typography
                component="h2"
                id="modal-title"
                level="h4"
                textColor="inherit"
                sx={{ fontWeight: "lg", mb: 1 }}
                className="font-YekanBakh-SemiBold!"
              >
                {title}
              </Typography>
            )}
          </header>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
};

export default Dialog;
