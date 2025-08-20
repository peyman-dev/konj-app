import React from "react";

const page = async ({ params }: { params: { category: string } }) => {
  const category = await params.category
  console.log(category)
  return <div>page</div>;
};

export default page;
