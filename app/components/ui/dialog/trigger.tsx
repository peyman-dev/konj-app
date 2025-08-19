import React, { ReactNode } from "react";

const DialogTrigger = ({ children, onToggle}: { children: ReactNode, onToggle: () => void }) => {
  return <div onClick={onToggle} className="cursor-pointer" aria-description="dialog-trigger">{children}</div>;
};

export default DialogTrigger;
