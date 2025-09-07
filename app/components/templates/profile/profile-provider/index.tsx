"use client"
import Container from "@/app/components/ui/container";
import React, { ReactNode } from "react";
import Sidebar from "../sidebar";

const ProfileProvider = ({ children }: { children: ReactNode }) => {
  return (
    <Container className="flex gap-4">
        <Sidebar />
        {children}
    </Container>
  );
};

export default ProfileProvider;
