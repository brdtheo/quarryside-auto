import { ReactElement } from "react";

export type IconButtonProps = {
  className?: string;
  children: ReactElement;
  size?: "xs" | "sm" | "lg";
  isDisabled?: boolean;
  badgeCount?: number;
  onClick: () => void;
};
