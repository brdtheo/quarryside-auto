import { ComponentProps } from "react";

import { TablerIcon } from "@tabler/icons-react";

export type IconButtonProps = Omit<ComponentProps<"button">, "children"> & {
  className?: string;
  children: TablerIcon;
  size?: "xs" | "sm" | "lg";
  badgeCount?: number;
  onClick: () => void;
};
