import clsx from "clsx";

import type { ContainerProps } from "./container";

/**
 * Wraps the children node in a 1200px container
 * @prop children The children node
 */
export default function Container({ children, className }: ContainerProps) {
  if (!children) {
    return null;
  }

  return (
    <div className={clsx("w-[1200px]", className)}>
      <>{children}</>
    </div>
  );
}
