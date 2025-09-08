"use client"
import Container from "@/app/components/ui/container";
import React, { ReactNode } from "react";
import Sidebar from "../sidebar";
import MobileTabs from "../mobile-tabs";

const ProfileProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Container className="flex gap-4 lg:flex-row flex-col my-[100px]">
        <Sidebar />
        <MobileTabs />
        {children}
    </Container>
  );
};

export default ProfileProvider;
