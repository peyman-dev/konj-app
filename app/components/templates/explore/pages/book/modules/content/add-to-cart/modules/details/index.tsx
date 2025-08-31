import React from "react";
import RowItem from "./row-item";

const BookDetails = () => {
  return (
    <div className="space-y-3 py-4">
      <RowItem label="نویسنده" value="پیمان احمدی" />
      <RowItem label="سال انتشار" value="1404" />
      <RowItem label="تعداد صفحات" value="۹۳۵" />
      <RowItem label="نویسنده" value="پیمان احمدی" />
    </div>
  );
};

export default BookDetails;
