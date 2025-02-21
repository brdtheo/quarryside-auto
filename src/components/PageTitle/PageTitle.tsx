import Breadcrumbs from "@/components/Breadcrumbs";

import type { PageTitleProps } from ".";

export default function PageTitle({ children }: PageTitleProps) {
  return (
    <div className="flex flex-col gap-1">
      <Breadcrumbs />
      <h1 className="font-bold text-2xl dark:text-white">{children}</h1>
    </div>
  );
}
