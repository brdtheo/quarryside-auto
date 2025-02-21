import { useMemo } from "react";

import clsx from "clsx";

import type { IconButtonProps } from ".";

export default function IconButton({
  className,
  children,
  isDisabled,
  size,
  badgeCount,
  onClick,
}: IconButtonProps) {
  const containerClassname = useMemo(() => {
    switch (size) {
      case "xs":
        return "p-0.5";
      case "sm":
        return "p-1";
      case "lg":
        return "p-2";
      default:
        return "p-2";
    }
  }, []);

  return (
    <button
      onClick={onClick}
      type="button"
      disabled={isDisabled}
      className={clsx(
        "hover:opacity-90 rounded w-fit h-fit disabled:bg-gray-100 disabled:dark:bg-gray-600 disabled:opacity-40 relative",
        "hover:opacity-90 rounded w-fit h-fit disabled:bg-gray-100 disabled:dark:bg-gray-600 disabled:opacity-40 relative",
        containerClassname,
        className,
      )}
    >
      {children}
      {!!badgeCount && (
        <span className="bg-primary dark:bg-primarydark text-white dark:text-black text-xs font-semibold rounded px-1 py-0.5 inline-flex items-center justify-center absolute top-[-5px] right-[-5px] leading-none z-10">
          {badgeCount}
        </span>
      )}
    </button>
  );
}
