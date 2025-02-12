import { useMemo } from "react";

import clsx from "clsx";

import type { ButtonProps } from "./button";

export default function Button({
  className,
  startIcon,
  children,
  variant,
  endIcon,
  backgroundColor,
  textColor,
  fontSize,
  fontWeight,
  isDisabled,
}: ButtonProps) {
  const backgroundColorClass = useMemo(() => {
    if (backgroundColor) return `bg-${backgroundColor}`;
    if (variant === "text" || variant == "outlined") return "bg-transparent";
    if (variant === "contained") return "bg-white";
  }, [backgroundColor, variant]);

  const textColorClass = useMemo(() => {
    if (isDisabled) return "text-grey";
    if (textColor) return `text-${textColor}`;
    if (variant === "text") return "text-black";
  }, [isDisabled, textColor, variant]);

  const fontSizeClass = useMemo(() => {
    if (fontSize) return `text-${fontSize}`;
    return "text-md";
  }, [fontSize]);

  const fontWeightClass = useMemo(() => {
    if (fontWeight) return `font-${fontWeight}`;
    return "font-medium";
  }, [fontWeight]);

  return (
    <button
      type="button"
      disabled={isDisabled}
      className={clsx(
        "inline-flex items-center gap-1 px-2 py-1",
        className,
        backgroundColorClass,
      )}
    >
      {startIcon && <div className="text-xs">{startIcon}</div>}
      <span
        className={clsx(
          fontSizeClass,
          fontWeightClass,
          textColorClass,
          "flex-1",
        )}
      >
        {children}
      </span>
      {endIcon && <div className="text-sm">{endIcon}</div>}
    </button>
  );
}
