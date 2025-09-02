import { Rating } from "@mui/material";
import React from "react";

const UserRate = () => {
  return (
    <div className="flex-between">
      <p className="text-xs text-gray-300">امتیاز شما به این کتاب:</p>
      <div dir="ltr">
        <Rating />
      </div>
    </div>
  );
};

export default UserRate;
