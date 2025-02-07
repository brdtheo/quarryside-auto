import Link from "next/link";

import clsx from "clsx";

import type { ChipIconProps, ChipProps } from ".";

const ChipIcon = ({ className, children, href }: ChipIconProps) => {
  if (!href) {
    return (
      <div className={clsx("pl-1 pr-2 flex items-center", className)}>
        {children}
      </div>
    );
  }
  return (
    <div className={clsx("pl-1 pr-2 flex items-center", className)}>
      <Link
        href={href}
        className="bg-brown hover:bg-brown-secondary rounded w-fit h-fit"
      >
        {children}
      </Link>
    </div>
  );
};

export default function Chip({
  children,
  leftIcon,
  rightIcon,
  iconHref,
}: ChipProps) {
  return (
    <div className="inline-flex rounded bg-brown">
      {!!leftIcon && (
        <ChipIcon className="pr-1 pl-2" href={iconHref}>
          {leftIcon}
        </ChipIcon>
      )}
      <span
        className={clsx("text-white text-xs py-1 font-medium", {
          "pr-2": !!leftIcon,
          "pl-2": !!rightIcon,
          "px-1.5": !rightIcon && !leftIcon,
        })}
      >
        {children}
      </span>
      {!!rightIcon && (
        <ChipIcon className="pl-1 pr-2 " href={iconHref}>
          {rightIcon}
        </ChipIcon>
      )}
    </div>
  );
}
