import React from "react";
import { Divider } from "@mui/joy";
import { ContactSection, Content } from "./elements";

const Footer = () => {
  return <footer className="h-[498px] px-20 text-white bg-primary-950 py-9">
    <Content />
    <Divider color="white"/>
    <ContactSection />
  </footer>;
};

export default Footer;
