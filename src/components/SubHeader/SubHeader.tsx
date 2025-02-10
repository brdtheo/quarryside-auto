import useTranslation from "next-translate/useTranslation";

import Container from "@/components/Container";
import SubHeaderLink from "@/components/SubHeaderLink";

export default function SubHeader() {
  const { t } = useTranslation("common");

  return (
    <div className="bg-white flex justify-center">
      <Container className="flex justify-center items-center">
        <nav className="inline-flex">
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
