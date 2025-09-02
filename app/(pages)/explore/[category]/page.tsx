import React from "react";

const page = ({ params }: { params: { category: string } }) => {
  const { category } = params; // Directly destructure params
  console.log(category);
  return <div>page</div>;
};

export default page;