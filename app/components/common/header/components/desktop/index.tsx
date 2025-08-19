import React from "react";
import Logo from "../logo";
import Search from "../search";
import BasketDropdown from "../basket";
import MyLibrary from "../my-library";
import ProfileDropdown from "../profile-dropdown";

const Desktop = () => {
  return (
    <nav className="py-[18px]">  
      <div className="w-full space-x-4 container flex-between">
        <Logo />
        <Search />
        <div className="**:h-12! *:min-w-max! flex items-center gap-4 rounded-lg!">
          <MyLibrary />
          <BasketDropdown />
          <ProfileDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Desktop;
