import React, { ReactNode } from "react";

const DialogTrigger = ({ children }: { children: ReactNode }) => {
  return <div className="cursor-pointer" aria-description="dialog-trigger">{children}</div>;
};

export default DialogTrigger;
