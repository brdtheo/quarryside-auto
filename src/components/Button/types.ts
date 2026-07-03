import { ComponentProps } from "react";

import { TablerIcon } from "@tabler/icons-react";

export type ButtonProps = ComponentProps<"button"> & {
  className?: string;
  startIcon?: TablerIcon;
  endIcon?: TablerIcon;
  children: string;
  size?: "xs" | "sm" | "lg";
  color?: "primary" | "secondary";
  rounded?: boolean;
  expanded?: boolean;
};
