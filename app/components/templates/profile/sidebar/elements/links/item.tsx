"use client";
import Link from "next/link";
import { isOptionalClickHandler } from "./settings";
import Image from "next/image";
import useRedirector from "@/app/core/hooks/use-redirector";

interface IProps {
  icon: string;
  title: string;
  href: string;
  action?: () => void;
  iconProps?: { [key: string]: any };
}

const Item = ({ href = "#", icon, title, action }: IProps) => {
  const { RedirectorContainer, isLoading, redirectToUrl } = useRedirector();
  const handleClick = () => {
    if (isOptionalClickHandler(action) && action) {
      action();
    } else {
      redirectToUrl(href)
    }
  };

  return (
    <RedirectorContainer>
      <Link
        onClick={handleClick}
        href={isOptionalClickHandler(action) ? "#" : href}
        className="flex items-center gap-[6.5px] h-12 px-8.5"
      >
        <Image src={icon} alt={title} width={20} height={20} />
        <span>{title}</span>
      </Link>
    </RedirectorContainer>
  );
};

export default Item;
