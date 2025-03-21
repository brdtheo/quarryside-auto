import { useMemo } from "react";

import clsx from "clsx";

import type { ButtonProps } from ".";

export default function Button({
  className,
  startIcon,
  children,
  endIcon,
  isDisabled,
  size,
  color,
  rounded,
}: ButtonProps) {
  const roundedClassname = useMemo(() => {
    if (!rounded) return "";
    switch (size) {
      case "xs":
        return "rounded-xs";
      case "sm":
        return "rounded";
      case "lg":
        return "rounded";
      default:
        return "rounded";
    }
  }, []);

  const containerClassname = useMemo(() => {
    switch (size) {
      case "xs":
        return "gap-0.5 px-1 py-0.5 h-4";
      case "sm":
        return "gap-0.5 px-1.5 py-0.5 h-6";
      case "lg":
        return "gap-1 px-3 py-2 h-10";
      default:
        return "gap-1 px-2.5 py-1 h-8";
    }
  }, []);

  const textSizeClassname = useMemo(() => {
    switch (size) {
      case "xs":
        return "text-xs";
      case "sm":
        return "text-sm";
      case "lg":
        return "text-base font-medium";
      default:
        return "text-base";
    }
  }, []);

  const colorClassname = useMemo(() => {
    switch (color) {
      case "primary":
        return "bg-primary text-white dark:text-black dark:bg-primarydark";
      case "secondary":
        return "bg-secondary text-black dark:bg-secondarydark dark:text-white";
    }
  }, []);

  return (
    <button
      role="button"
      type="button"
      disabled={isDisabled}
      className={clsx(
        "inline-flex items-center h-fit hover:opacity-90 leading-none",
        containerClassname,
        colorClassname,
        roundedClassname,
        className,
      )}
    >
      {startIcon && <div className={textSizeClassname}>{startIcon}</div>}
      <span className={clsx("flex-1", textSizeClassname)}>{children}</span>
      {endIcon && <div className={textSizeClassname}>{endIcon}</div>}
    </button>
  );
}
