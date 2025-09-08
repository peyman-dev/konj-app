import { Loader2 } from "lucide-react";
import React from "react";
import { createPortal } from "react-dom";

const Redirecting = () => {
  return (
    <>
      {createPortal(
        <div className="fixed flex-center select-none z-1000! h-dvh w-dvw top-0 right-0 bg-black/15">
          <div className="p-5 text-primary-700 bg-white rounded-lg flex-col-center gap-4">
            <Loader2 className="size-10 duration-1000 animate-spin transition-all" />
            <span>درحال انتقال</span>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Redirecting;
