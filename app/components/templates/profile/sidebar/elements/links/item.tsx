import Link from "next/link";
import { isOptionalClickHandler } from "./settings";
import Image from "next/image";

interface IProps {
  icon: string;
  title: string;
  href: string;
  action?: () => void;
  iconProps?: { [key: string]: any };
}

const Item = ({ href = "#", icon, title, action }: IProps) => {
  const handleClick = () => {
    if (isOptionalClickHandler(action) && action) {
      action();
    }
  };

  return (
    <Link
      onClick={handleClick}
      href={isOptionalClickHandler(action) ? "#" : href}
      className="flex items-center gap-[6.5px] h-12 px-8.5"
    >
      <Image src={icon} alt={title} width={20} height={20} />
      <span>{title}</span>
    </Link>
  );
};

export default Item;
