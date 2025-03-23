import { ReactNode } from "react";

import { TablerIcon } from "@tabler/icons-react";

import type { Url } from "@/types";

export type ChipProps = {
  className?: string;
  children: string;
  startIcon?: TablerIcon;
  endIcon?: TablerIcon;
  /** If passed, the path is set to a Link element */
  iconHref?: Url;
};

export type ChipIconProps = {
  className?: string;
  children: ReactNode;
  href?: Url;
};
