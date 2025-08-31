import React from "react";

const RowItem = ({ label, value }: { label: string; value: string }) => {
  return (
    <div className="flex items-center gap-1">
      <p className="text-[#787878]">{label} :</p>
      <p className="text-gray-950">{value}</p>
    </div>
  );
};

export default RowItem;
