"use client";
import { useRouter } from "next/navigation";
import React, { useTransition } from "react";

const useRedirector = (): [isLoading: boolean, redirectToUrl: (url: string) => void] => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter()

  const handleRedirect = (url: string) => {
    startTransition(async () => {
        await router.push(url) 
    })
  }

  return [isPending, handleRedirect]
};

export default useRedirector;
