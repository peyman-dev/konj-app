import ProfileProvider from "@/app/components/templates/profile/profile-provider";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return <ProfileProvider>
    {children}</ProfileProvider>;
};

export default layout;
