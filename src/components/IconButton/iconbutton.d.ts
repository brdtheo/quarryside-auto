import { ComponentProps, ReactElement } from "react";

export type IconButtonProps = ComponentProps<"button"> & {
  className?: string;
  children: ReactElement;
  size?: "xs" | "sm" | "lg";
  badgeCount?: number;
  onClick: () => void;
};
