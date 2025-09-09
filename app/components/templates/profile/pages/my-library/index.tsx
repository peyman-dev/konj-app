import React from "react";
import Filter from "./elements/filter";
import Table from "./elements/table";

const MyLibrary = () => {
  return (
    <section className="grow">
      <Filter />
      <Table />
    </section>
  );
};

export default MyLibrary;
