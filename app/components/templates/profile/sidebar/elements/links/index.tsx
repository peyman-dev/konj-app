import React from "react";
import { navigation } from "./settings";
import Item from "./item";

const Links = () => {

  return (
    <div className="mb-[30px] mt-4">
      {navigation.map((item) => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  );
};

export default Links;
