import Button from "@/app/components/ui/button";
import React from "react";

const SubmitButton = ({ disabled }: { disabled: boolean }) => {
  return (
    <div className="grow! w-full! mt-[26px] cursor-pointer! hover:opacity-90! duration-150!">
      <Button interfaceColor="primary" disabled={disabled} className="w-full! min-w-full! cursor-pointer!">ادامه</Button>
    </div>
  );
};

export default SubmitButton;
