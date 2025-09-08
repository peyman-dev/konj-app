import React from "react";
import UserAvatar from "./elements/user-avatar";
import UserEmail from "./elements/user-email";
import { Divider } from "@mui/material";
import Links from "./elements/links";

const Sidebar = () => {
  return (
    <aside className="min-w-[302px]! lg:visible lg:block hidden invisible max-h-max sticky top-14 mb-10! p-3! bg-white rounded-[8px]">
      <UserAvatar />
      <UserEmail />
      <Divider />
      <Links />
    </aside>
  );
};

export default Sidebar;
