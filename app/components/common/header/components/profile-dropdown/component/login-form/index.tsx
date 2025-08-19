"use client"
import Input from "@/app/components/ui/input";
import { FormControl } from "@mui/joy";
import React from "react";
import SubmitButton from "./submit";

const LoginForm = () => {
  return (
    <FormControl>
      <Input label="شماره موبایل یا ایمیل" />
      <SubmitButton />
    </FormControl>
  );
};

export default LoginForm;
