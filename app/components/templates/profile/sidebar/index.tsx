import React from "react";
import UserAvatar from "./elements/user-avatar";
import UserEmail from "./elements/user-email";
import { Divider } from "@mui/material";
import Links from "./elements/links";

const Sidebar = () => {
  return (
    <aside className="w-[302px]! max-h-max sticky top-14 mt-[100px] mb-10! p-3! bg-white rounded-[8px]">
      <UserAvatar />
      <UserEmail />
      <Divider />
      <Links />
    </aside>
  );
};

export default Sidebar;
