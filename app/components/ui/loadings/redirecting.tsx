import { Loader2 } from "lucide-react";
import React from "react";

const Redirecting = () => {
  return (
    <div className="fixed flex-center  z-1000 h-dvh w-dvw top-0 right-0 bg-black/50">
      <div className="w-[386px] p-5 bg-white rounded-lg flex-col-center gap-4">
        <Loader2 className="size-10 duration-150 animate-spin transition-all" />
        <span>درحال انتقال</span>
      </div>
    </div>
  );
};

export default Redirecting;
