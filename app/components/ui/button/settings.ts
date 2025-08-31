import clsx from "clsx";

const applyTheme = (interfaceColor: string) => {
  const baseTheme = clsx(
    "flex items-center justify-center cursor-pointer! duration-150! hover:bg-opacity-90! text-lg! gap-2.5 px-4 h-[44px] !rounded-[8px]"
  );

  switch (interfaceColor) {
    case "primary":
      return clsx("!bg-[#744D7E] !text-white", baseTheme);
    case "secondary":
      return clsx("text-[#744D7E]", baseTheme);
    case "tertiary":
      return clsx("!bg-[#744D7E]", baseTheme);
    case "destructive":
      return clsx("!bg-[#EC0B1A]", baseTheme);
    default:
      return clsx(baseTheme);
  }
};

export default { applyTheme };