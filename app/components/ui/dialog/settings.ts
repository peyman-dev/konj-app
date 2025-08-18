import { ReactNode } from "react";

export const useAsModalTrigger = () => ({
  ...{ "aria-description": "modal-trigger" },
});


export const isDialogTrigger = (obj: object | null | undefined, key: string): boolean => {
  if (typeof obj !== 'object' || obj === null || obj === undefined) {
    return false;
  }
  return Object.prototype.hasOwnProperty.call(obj, key);
};