"use client";
import useRedirector from "@/app/core/hooks/use-redirector";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

const Title = ({ title, href }: { title: string; href?: string }) => {
  const { RedirectorContainer, isLoading, redirectToUrl } = useRedirector();
  return (
    <RedirectorContainer>
      <div className="grow flex-between">
        <p className="font-YekanBakh-Bold text-2xl">{title}</p>
        {href && (
          <div
            className="cursor-pointer flex items-center gap-2 text-primary-700"
            onClick={() => redirectToUrl("/explore/example-book")}
          >
            مشاهده بیشتر
            <ChevronLeft className="size-5" />
          </div>
        )}
      </div>
    </RedirectorContainer>
  );
};

export default Title;
