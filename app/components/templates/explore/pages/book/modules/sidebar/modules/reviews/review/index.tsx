import React from "react";
import UserName from "./elements/user-name";
import Stars from "./elements/stars";
import Message from "./elements/message";

const ReviewCard = () => {
  return (
    <article className="space-y-3 py-4">
      <div className="flex-between mb-[14px]">
        <UserName />
        <Stars />
      </div>
      <div>
        <Message />
      </div>
    </article>
  );
};

export default ReviewCard;
