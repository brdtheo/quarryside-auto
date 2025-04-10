import { useMemo } from "react";

import clsx from "clsx";

import type { IconButtonProps } from ".";

export default function IconButton({
  className,
  size,
  badgeCount,
  onClick,
  ...props
}: IconButtonProps) {
  const containerClassname = useMemo(() => {
    switch (size) {
      case "xs": {
        return "p-0.5";
      }
      case "sm": {
        return "p-1";
      }
      case "lg": {
        return "p-2";
      }
      default: {
        return "p-2";
      }
    }
  }, []);

  const iconSize = useMemo(() => {
    switch (size) {
      case "xs": {
        return 14;
      }
      case "sm": {
        return 14;
      }
      case "lg": {
        return 18;
      }
      default: {
        return 16;
      }
    }
  }, []);

  const badgeValue = useMemo(() => {
    if (!badgeCount) return;
    if (badgeCount > 99) {
      return "99+";
    }
    return badgeCount;
  }, [badgeCount]);

  return (
    <button
      role={props.role ?? "button"}
      onClick={onClick}
      type={props.type ?? "button"}
      disabled={props.disabled}
      className={clsx(
        "hover:opacity-90 rounded w-fit h-fit disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:opacity-40 relative",
        "hover:opacity-90 rounded w-fit h-fit disabled:bg-gray-100 dark:disabled:bg-gray-600 disabled:opacity-40 relative",
        containerClassname,
        className,
      )}
      {...props}
    >
      <props.icon size={iconSize} />
      {!!badgeCount && !!badgeValue && (
        <span className="bg-primary dark:bg-primarydark text-white dark:text-black text-xs font-semibold rounded px-1 py-0.5 inline-flex items-center justify-center absolute top-[-5px] right-[-5px] leading-none z-10">
          {badgeValue}
        </span>
      )}
    </button>
  );
}
