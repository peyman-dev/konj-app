import React from "react";
import Title from "./elements/title";
import MessageInputArea from "./elements/textarea";
import UserRate from "./elements/user-rate";
import Button from "@/app/components/ui/button";

const NewComment = () => {
  return (
    <div className="mt-6">
      <Title />
      <MessageInputArea />
      <div className="grow mt-[28px] space-y-7">
        <UserRate />
        <Button fullWidth interfaceColor="primary">
          ثبت نظر
        </Button>
      </div>
    </div>
  );
};

export default NewComment;
