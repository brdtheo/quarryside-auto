import { useTranslations } from "next-intl";

import Container from "@/components/Container";
import SubHeaderLink from "@/components/SubHeaderLink";

export default function SubHeader() {
  const t = useTranslations("common");

  return (
    <div className="bg-background brightness-98 dark:bg-black hidden md:flex justify-center h-11 border-b border-b-divider dark:border-y dark:border-y-dividerdark">
      <Container className="flex justify-start items-center h-11">
        <nav className="inline-flex w-full items-center h-8 gap-2">
          <SubHeaderLink slug="vehicles" label={t("subHeader.usedVehicles")} />
          <SubHeaderLink slug="wheels" label={t("subHeader.rimsTires")} />
          <SubHeaderLink slug="#" label={t("subHeader.careers")} isDisabled />
          <SubHeaderLink
            slug="#"
            label={t("subHeader.helpCenter")}
            isDisabled
          />
          <SubHeaderLink slug="#" label={t("subHeader.about")} isDisabled />

          <div className="flex flex-1 justify-end">
            <a
              href="#deprecated"
              className="select-none uppercase font-semibold text-xs bg-yellow-200 text-yellow-700 dark:bg-yellow-300 rounded px-1 py-0.5"
            >
              {t("deprecatedNoticeBadge")}
            </a>
          </div>
        </nav>
      </Container>
    </div>
  );
}
