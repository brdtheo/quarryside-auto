import useTranslation from "next-translate/useTranslation";

import Container from "@/components/Container";
import SubHeaderLink from "@/components/SubHeaderLink";

export default function SubHeader() {
  const { t } = useTranslation("common");

  return (
    <div className="bg-background dark:bg-black hidden md:flex justify-center h-10 border-b border-b-divider dark:border-y dark:border-y-dividerdark">
      <Container className="flex justify-center items-center h-10">
        <nav className="inline-flex items-center h-8 gap-2">
          <SubHeaderLink slug="vehicles" label={t("subHeader.usedVehicles")} />
          <SubHeaderLink slug="wheels" label={t("subHeader.rimsTires")} />
          <SubHeaderLink slug="#" label={t("subHeader.careers")} isDisabled />
          <SubHeaderLink
            slug="#"
            label={t("subHeader.helpCenter")}
            isDisabled
          />
          <SubHeaderLink slug="#" label={t("subHeader.about")} isDisabled />
        </nav>
      </Container>
    </div>
  );
}
