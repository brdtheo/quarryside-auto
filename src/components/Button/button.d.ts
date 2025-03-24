import { TablerIcon } from "@tabler/icons-react";

export type ButtonProps = {
  className?: string;
  startIcon?: TablerIcon;
  endIcon?: TablerIcon;
  children: string;
  size?: "xs" | "sm" | "lg";
  color?: "primary" | "secondary";
  rounded?: boolean;
  isDisabled?: boolean;
  expanded?: boolean;
};
