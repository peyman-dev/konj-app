import React from "react";
import BooksRow from "./modules/BooksRow";
import { books } from "@/app/core/lib/constants";

const Content = () => {
  return (
    <main className="grow space-y-14">
      <BooksRow title="جدید ترین کتاب های داستانی" items={books} />
      <BooksRow title="جدید ترین کتاب های داستانی" items={books} />
      <BooksRow title="جدید ترین کتاب های داستانی" items={books} />
      <BooksRow title="جدید ترین کتاب های داستانی" items={books} />
      <BooksRow title="جدید ترین کتاب های داستانی" items={books} />
    </main>
  );
};

export default Content;
