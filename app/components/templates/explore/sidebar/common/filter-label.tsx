"use client";
import React from "react";

// Define the props interface for better type safety
interface FilterLabelProps {
  title: string;
  CtaComponent?: React.FC; // Optional React functional component
}

const FilterLabel: React.FC<FilterLabelProps> = ({ title, CtaComponent }) => {
  return (
    <div className="pb-4 flex-between mb-4 border-b border-gray-20">
      <p className="font-Farhang-Medium">{title}</p>
      <div>{CtaComponent && <CtaComponent />}</div>
    </div>
  );
};

export default FilterLabel;