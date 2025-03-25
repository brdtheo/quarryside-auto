import { useTranslations } from "next-intl";

import clsx from "clsx";

import EmptySearchResult from "@/components/EmptySearchResult";

import type { WheelListProps } from ".";

export default function WheelList({
  className,
  data,
  itemRender,
}: WheelListProps) {
  const t = useTranslations("wheels");

  if (!data || (data ?? {}).length === 0) {
    return <EmptySearchResult title={t("noWheelsFound")} />;
  }

  return (
    <ul
      className={clsx(
        "flex-1 grid grid-cols-4 gap-4 @container/wheellist content-start",
        className,
      )}
    >
      {(data ?? []).map((element) => itemRender(element))}
    </ul>
  );
}
