import { UnderHeroItemType } from "@/app/core/lib/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const UnderHeroItem = ({ title, href, src }: UnderHeroItemType) => {
  return (
    <Link href={href}>
      <article className="h-[60px] rounded-lg border border-dashed flex-center gap-2">
        <Image src={src} alt={title} width={36} height={36} />
        <div>
          <h5 className="text-xl">{title}</h5>
        </div>
      </article>
    </Link>
  );
};

export default UnderHeroItem;
