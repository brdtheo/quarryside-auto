import useTranslation from "next-translate/useTranslation";

import Container from "@/components/Container";
import FooterNavSection from "@/components/FooterNavSection";

export default function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-brown text-white flex justify-center">
      <Container className="py-8 grid grid-flow-col auto-cols-auto">
        <FooterNavSection
          title={t("footer.section.usedVehicles.title")}
          links={[
            {
              title: t("footer.section.usedVehicles.usedCivettaCars"),
              to: "/vehicles?brand=CIVETTA&condition=USED",
            },
            {
              title: t("footer.section.usedVehicles.usedIbishuCars"),
              to: "/vehicles?brand=IBISHU&condition=USED",
            },
            {
              title: t("footer.section.usedVehicles.usedGavrilCars"),
              to: "/vehicles?brand=GAVRIL&condition=USED",
            },
            {
              title: t("footer.section.usedVehicles.usedEtkCars"),
              to: "/vehicles?brand=ETK&condition=USED",
            },
            {
              title: t("footer.section.usedVehicles.usedHiroshiCars"),
              to: "/vehicles?brand=HIROSHI&condition=USED",
            },
          ]}
        />
        <FooterNavSection
          title={t("footer.section.rimsTires.title")}
          links={[
            {
              title: t("footer.section.rimsTires.autobelloWheels"),
              to: "/vehicles?brand=CIVETTA&condition=USED",
            },
            {
              title: t("footer.section.rimsTires.etkWheels"),
              to: "/vehicles?brand=IBISHU&condition=USED",
            },
            {
              title: t("footer.section.rimsTires.folkWheels"),
              to: "/vehicles?brand=GAVRIL&condition=USED",
            },
            {
              title: t("footer.section.rimsTires.gavrilWheels"),
              to: "/vehicles?brand=ETK&condition=USED",
            },
            {
              title: t("footer.section.rimsTires.ibishuWheels"),
              to: "/vehicles?brand=HIROSHI&condition=USED",
            },
          ]}
        />
        <FooterNavSection
          title={t("footer.section.careers.title")}
          links={[
            {
              title: t("footer.section.careers.openPositions"),
              to: "#",
            },
            {
              title: t("footer.section.careers.internshipProgram"),
              to: "#",
            },
            {
              title: t("footer.section.careers.carJockeyRequirements"),
              to: "#",
            },
          ]}
        />
        <FooterNavSection
          title={t("footer.section.helpCenter.title")}
          links={[
            {
              title: t("footer.section.helpCenter.questionAnswers"),
              to: "#",
            },
            {
              title: t("footer.section.helpCenter.delivery"),
              to: "#",
            },
            {
              title: t("footer.section.helpCenter.contact"),
              to: "#",
            },
          ]}
        />
        <FooterNavSection
          title={t("footer.section.about.title")}
          links={[
            {
              title: t("footer.section.about.ourCompany"),
              to: "#",
            },
            {
              title: t("footer.section.about.whereToFindUs"),
              to: "#",
            },
          ]}
        />
      </Container>
    </footer>
  );
}
