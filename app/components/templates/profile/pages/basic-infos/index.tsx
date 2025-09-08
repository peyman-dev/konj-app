import React from "react";
import Row from "./elements/row";
import clsx from "clsx";
import { setDynamicStyles } from "../../settings";

const BasicInformations = ({ isMobileTab }: { isMobileTab?: boolean }) => {
  const classNames = setDynamicStyles({ isMobileTab });

  return (
    <section className={classNames}>
      <Row label="ایمیل" value="peymangeek@gmail.com" />
      <Row label="شماره تلفن" value="+989911871596" />
      <Row label="نام و خانوادگی" value="پیمان احمدی" />
      <Row label="جنسیت" value="درج نشده" />
    </section>
  );
};

export default BasicInformations;
