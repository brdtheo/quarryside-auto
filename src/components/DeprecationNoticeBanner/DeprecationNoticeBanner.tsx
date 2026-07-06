import { useTranslations } from "next-intl";

import Container from "@/components/Container";

export default function DeprecationNoticeBanner() {
  const t = useTranslations("common");

  return (
    <div
      className="pointer-events-none select-none py-1 bg-yellow-200 text-yellow-700 dark:bg-yellow-300"
      id="deprecated"
    >
      <Container className="m-0 mx-auto">
        <p className="text-xs text-center uppercase font-semibold px-1 py-0.5 rounded">
          {t("deprecatedNotice")}
        </p>
      </Container>
    </div>
  );
}
