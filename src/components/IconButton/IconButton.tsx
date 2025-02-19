import { useMemo } from "react";

import clsx from "clsx";

import type { IconButtonProps } from ".";

export default function IconButton({
  className,
  children,
  isDisabled,
  size,
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
        "hover:opacity-90 rounded w-fit h-fit",
        containerClassname,
        className,
      )}
    >
      {children}
    </button>
  );
}
