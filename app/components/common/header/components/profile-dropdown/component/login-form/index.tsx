"use client";
import Input from "@/app/components/ui/input";
import { FormControl } from "@mui/joy";
import React, { useEffect } from "react";
import SubmitButton from "./submit";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, setValue, reset, handleSubmit, getValues, watch } = useForm(
    {
      defaultValues: {
        identifier: "",
      },
    }
  );

  const values = getValues();

  const identifier = watch("identifier")

  return (
    <FormControl>
      <Input label="شماره موبایل یا ایمیل" {...register("identifier")} />
      <SubmitButton disabled={!identifier}/>
    </FormControl>
  );
};

export default LoginForm;
