import Link from "next/link";

import clsx from "clsx";

import type { ChipIconProps, ChipProps } from ".";

const ChipIcon = ({ className, children, href }: ChipIconProps) => {
  if (!href) {
    return (
      <div
        className={clsx(
          "pl-1 pr-2 flex text-white items-center dark:bg-primarydark dark:text-black",
          className,
        )}
      >
        {children}
      </div>
    );
  }
  return (
    <div className={clsx("pl-1 pr-2 flex items-center", className)}>
      <Link
        href={href}
        className="bg-primary text-white dark:bg-primarydark dark:text-black hover:opacity-80 rounded w-fit h-fit"
      >
        {children}
      </Link>
    </div>
  );
};

export default function Chip({
  children,
  startIcon,
  endIcon,
  iconHref,
}: ChipProps) {
  const icons = {
    start: startIcon,
    end: endIcon,
  };
  return (
    <div
      data-testid="chip"
      className="inline-flex rounded bg-primary dark:bg-primarydark"
    >
      {!!icons.start && (
        <ChipIcon className="pr-1 pl-2" href={iconHref}>
          <icons.start />
        </ChipIcon>
      )}
      <span
        className={clsx("text-white text-xs py-1 font-medium dark:text-black", {
          "pr-2": !!icons.start,
          "pl-2": !!icons.end,
          "px-1.5": !icons.end && !icons.start,
        })}
      >
        {children}
      </span>
      {!!icons.end && (
        <ChipIcon className="pl-1 pr-2" href={iconHref}>
          <icons.end />
        </ChipIcon>
      )}
    </div>
  );
}
