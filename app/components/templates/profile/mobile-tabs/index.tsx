"use client"
import React, { useState } from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import { navigation } from "../sidebar/elements/links/settings";
import BasicInformations from "../pages/basic-infos";

const MobileTabs = () => {
  const [value, setValue] = useState(1);

  const handleChange = (v: any) => {
    console.log(v);
  };
  return (
    <div className="lg:hidden lg:invisible">
      <Tabs className="bg-transparent! *:border-b-0!">
        <TabList onClick={(e) => {
            console.log(e)
        }}>
          {navigation.map((item) => (
            <Tab key={item.id} children={item.title} className="font-Farhang-Medium! md:text-base min-w-max! px-2! text-sm!" />
          ))}
        </TabList>
        <TabPanel value={0}> 
            <BasicInformations isMobileTab/>
        </TabPanel>
        <TabPanel value={1}>Test 2</TabPanel>
        <TabPanel value={2}> Test 3</TabPanel>
      </Tabs>
    </div>
  );
};

export default MobileTabs;
