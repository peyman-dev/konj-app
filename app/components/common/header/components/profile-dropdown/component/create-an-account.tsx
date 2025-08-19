import Button from "@/app/components/ui/button";
import Dialog from "@/app/components/ui/dialog";
import { useAsModalTrigger } from "@/app/components/ui/dialog/settings";
import DialogTrigger from "@/app/components/ui/dialog/trigger";
import WithParentComponent from "@/app/components/ui/hoc/with-parent-component";
import { Typography } from "@mui/joy";
import { User2 } from "lucide-react";
import React from "react";
import LoginForm from "./login-form";

const CreateAnAccount = () => {
  const Trigger = (
    <Button
      startDecorator={<User2 className="size-4" />}
      size="sm"
      interfaceColor="primary"
    >
      ورود/ثبت نام
    </Button>
  );

  return (
    <WithParentComponent>
      <Dialog Trigger={Trigger} title="خوش آمدید">
        <Typography
          component="h2"
          className="font-YekanBakh-Black! text-black! text-2xl!"
        >
          ورود به حساب کاربری
        </Typography>
        <div className="mt-6">
          <Typography className="text-sm! mb-4! font-YekanBakh-Regular! text-gray-300!">
            شماره موبایل یا ایمیل خود را وارد کنید:
          </Typography>
          <LoginForm />
        </div>
      </Dialog>
    </WithParentComponent>
  );
};

export default CreateAnAccount;
