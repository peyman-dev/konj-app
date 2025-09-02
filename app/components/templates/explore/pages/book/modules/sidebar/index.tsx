import React from "react";
import Title from "./modules/new-comment/elements/title";
import Reviews from "./modules/reviews";
import NewComment from "./modules/new-comment";

const Sidebar = () => {
  return (
    <aside className="min-w-[413px] bg-white rounded-lg p-6">
      <Title />
      <Reviews />
      <NewComment />
    </aside>
  );
};

export default Sidebar;
