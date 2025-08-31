import Content from "@/app/components/templates/explore/content";
import Sidebar from "@/app/components/templates/explore/sidebar";
import Container from "@/app/components/ui/container";
import React from "react";

const page = () => {
  return (
    <Container.BigScreen className="flex gap-5">
      <Sidebar />
      <Content />
    </Container.BigScreen>
  );
};

export default page;
