import { useTranslations } from "next-intl";

import { IconZoomExclamation } from "@tabler/icons-react";

import type { EmptySearchResultProps } from ".";

export default function EmptySearchResult({ title }: EmptySearchResultProps) {
  const t = useTranslations("common");
  return (
    <div className="flex flex-col gap-4 items-center py-12 px-24">
      <IconZoomExclamation size={72} stroke={1.5} />
      <section className="text-center">
        <h2 className="text-lg font-medium mb-1">{title}</h2>
        <p>{t("emptySearchDescription")}</p>
      </section>
    </div>
  );
}
