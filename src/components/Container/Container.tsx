import clsx from "clsx";

import type { ContainerProps } from "./container";

/**
 * Wraps the children node in a 1200px container
 */
export default function Container({ children, className }: ContainerProps) {
  if (!children) {
    return;
  }

  return (
    <div className={clsx("w-full px-8 xl:px-0 xl:w-[1200px]", className)}>
      {children}
    </div>
  );
}
