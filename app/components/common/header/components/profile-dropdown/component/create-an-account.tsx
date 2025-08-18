import Button from "@/app/components/ui/button";
import Dialog from "@/app/components/ui/dialog";
import { useAsModalTrigger } from "@/app/components/ui/dialog/settings";
import DialogTrigger from "@/app/components/ui/dialog/trigger";
import WithParentComponent from "@/app/components/ui/with-parent-component";
import { User2 } from "lucide-react";
import React from "react";

const CreateAnAccount = () => {
  return (
    <WithParentComponent>
      <Button
        startDecorator={<User2 className="size-4" />}
        size="sm"
        interfaceColor="primary"
      >
        ورود/ثبت نام
      </Button>

      <Dialog>
        <DialogTrigger>
          <button>Toggle Modal ! :)</button>
        </DialogTrigger>
        <div>content</div>
      </Dialog>
    </WithParentComponent>
  );
};

export default CreateAnAccount;
