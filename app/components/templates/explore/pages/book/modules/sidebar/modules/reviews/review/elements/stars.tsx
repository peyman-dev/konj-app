import React from "react";
import { Rating } from "@mui/material";

const Stars = () => {
  return (
    <div>
      <Rating
        className="**:[.css-hlbajn-MuiRating-label]:!text-[#E1BD09] **:[.css-hlbajn-MuiRating-label]:opacity-100! gap-0!"
        defaultValue={4}
        readOnly
      />
    </div>
  );
};

export default Stars;
