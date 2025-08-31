"use client";
import Redirecting from "@/app/components/ui/loadings/redirecting";
import { useRouter } from "next/navigation";
import { useTransition, ReactNode } from "react";

const useRedirector = () => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const redirectToUrl = (url: string) => {
    try {
      startTransition(() => {
        router.push(url);
      });
    } catch (error) {
      console.error("Error during redirect:", error);
      // می‌توانید منطق مدیریت خطا را اینجا اضافه کنید، مثلاً نمایش یک پیام خطا
    }
  };

  const RedirectorContainer: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
      <>
        {isPending && <Redirecting />}
        {children}
      </>
    );
  };

  return {
    isLoading: isPending,
    redirectToUrl,
    RedirectorContainer,
  };
};

export default useRedirector;