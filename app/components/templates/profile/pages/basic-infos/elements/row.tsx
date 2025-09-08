import React from "react";

const Row = ({ label, value }: { label: string; value?: string }) => {
  return (
    <div className="flex-between font-Farhang-Medium! last:border-b-0! border-b! h-[87px]">
      <div className="space-y-[10.5px]">
        <p>
            {label}:
        </p>
        <p className="text-xs">
            {value || "درج نشده است"}
        </p>
      </div>
      <button className="text-primary-700 cursor-pointer">+ اضافه کردن</button>
    </div>
  );
};

export default Row;
