import { ReactElement } from "react";

export type ContainerProps = {
  /** The children node, wrapped in a 1200px container */
  children: ReactElement[] | ReactElement;
  className?: string;
};
