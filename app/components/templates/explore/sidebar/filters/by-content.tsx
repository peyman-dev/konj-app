"use client";
import React from "react";
import FilterLabel from "../common/filter-label";

const ByContentCategory = () => {
  const Content = () => <div data-type="Element">Hello World</div>;
  return (
    <div>
      <FilterLabel title="فیلتر های انتخاب شده" CtaComponent={Content} />
    </div>
  );
};

export default ByContentCategory;
