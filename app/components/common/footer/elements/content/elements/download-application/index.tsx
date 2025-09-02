import React from "react";
import Header from "./elements/download-for/header";
import { Divider } from "@mui/joy";
import DownloadFor from "./elements/download-for";

export const DownloadApplication = () => {
  return (
    <div className="size-[300px] space-y-6 px-6 py-8 bg-white rounded-lg">
      <Header />
      <Divider />
      <DownloadFor />
    </div>
  );
};
