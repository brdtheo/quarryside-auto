import { ReactNode } from "react";

import type { Url } from "@/types";

export type ChipProps = {
  children: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  /** If passed, the path is set to a Link element */
  iconHref?: Url;
};

export type ChipIconProps = {
  className?: string;
  children: ReactNode;
  href?: Url;
};
