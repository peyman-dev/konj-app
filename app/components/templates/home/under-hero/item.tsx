"use client";
import useRedirector from "@/app/core/hooks/use-redirector";
import { UnderHeroItemType } from "@/app/core/lib/types";
import { Loader2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useId } from "react";

const UnderHeroItem = ({ title, href, src }: UnderHeroItemType) => {
  const {RedirectorContainer,isLoading,redirectToUrl} = useRedirector();
  const id = useId();

  return (
    <article
      onClick={() => redirectToUrl(href)}
      className="h-[60px] cursor-pointer rounded-lg border border-dashed flex-center gap-2"
    >
      {isLoading ? (
        <span className="text-sm font-YekanBakh-SemiBold flex-center gap-2">
            <Loader2 className="text-primary-700 size-4 animate-spin duration-150"/>
            <span>
                درحال انتقال ...
            </span>
        </span>
      ) : (
        <React.Fragment>
          <Image src={src} alt={title} width={36} height={36} />
          <div>
            <h5 className="text-xl">{title}</h5>
          </div>
        </React.Fragment>
      )}
    </article>
  );
};

export default UnderHeroItem;
