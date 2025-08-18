import WithParentComponent from "@/app/components/ui/with-parent-component";
import React from "react";
import CreateAnAccount from "./component/create-an-account";

const ProfileDropdown = () => {
  return (
    <WithParentComponent>
      <CreateAnAccount />
    </WithParentComponent>
  );
};

export default ProfileDropdown;
