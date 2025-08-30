import { Loader2 } from "lucide-react";
import React from "react";

const Redirector = ({ isLoading }: { isLoading: boolean }) => {
  if (isLoading) {
    return (
      <div className="absolute size-full z-10 flex-center bg-black/50 backdrop-blur-sm">
        <div className="max-w-max p-5 text-primary-700 rounded-2xl bg-white shadow-xl flex-col-center gap-2">
          <Loader2 className="size-8 duration-150 animate-spin transition-all" />
          <span className="text-sm">درحال انتقال</span>
        </div>
      </div>
    );
  } else null;
};

export default Redirector;
