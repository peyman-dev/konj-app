"use client";
import React, { useEffect, useState } from "react";
import { Divider } from "@mui/joy";
import { ContactSection, Content } from "./elements";
import { CheckFooterVisibility } from "./settings";

const Footer = () => {
  const [shouldDisplayFooter, setShouldDisplayFooter] = useState(true);

  useEffect(() => {
    CheckFooterVisibility(setShouldDisplayFooter);
  }, []);

  // برای دیباگ، می‌توانید از useEffect دیگری استفاده کنید
  useEffect(() => {
    console.log("Footer visibility:", shouldDisplayFooter);
  }, [shouldDisplayFooter]);

  if (!shouldDisplayFooter) {
    return null;
  }

  return (
    <footer className="h-[498px] px-20 text-white bg-primary-950 py-9">
      <Content />
      <Divider color="white" />
      <ContactSection />
    </footer>
  );
};

export default Footer;