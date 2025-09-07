"use client";
import React from "react";
import DefaultAvatar from "@/svg/default-user-avatar.svg";
import Image from "next/image";

const UserAvatar = () => {
  return (
    <header className=" flex-center grow -top-10 ">
      <Image
        alt=""
        width={128}
        height={128}
        src={DefaultAvatar.src}
        className="absolute -top-10"
      />
    </header>
  );
};

export default UserAvatar;
