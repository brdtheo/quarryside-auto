import { getTranslations } from "next-intl/server";

import Container from "@/components/Container";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import NavSection from "@/components/NavSection";
import ThemeSwitcher from "@/components/ThemeSwitcher";

export default async function Footer() {
  const t = await getTranslations("common");

  return (
    <footer className="bg-primary dark:bg-black flex justify-center dark:border-t dark:border-t-dividerdark @container/footer">
      <Container className="py-8 ">
        <div className="grid grid-cols-1 gap-8 @sm/footer:grid-cols-2 @lg:grid-cols-3 @3xl:grid-cols-4 @4xl:grid-cols-5">
          <NavSection
            titleHref="/vehicles"
            title={t("navigation.usedVehicles.title")}
            links={[
              {
                title: t("navigation.usedVehicles.usedCivettaCars"),
                href: "/vehicles?brand=CIVETTA&condition=USED",
              },
              {
                title: t("navigation.usedVehicles.usedIbishuCars"),
                href: "/vehicles?brand=IBISHU&condition=USED",
              },
              {
                title: t("navigation.usedVehicles.usedGavrilCars"),
                href: "/vehicles?brand=GAVRIL&condition=USED",
              },
              {
                title: t("navigation.usedVehicles.usedEtkCars"),
                href: "/vehicles?brand=ETK&condition=USED",
              },
              {
                title: t("navigation.usedVehicles.usedHiroshiCars"),
                href: "/vehicles?brand=HIROSHI&condition=USED",
              },
            ]}
          />
          <NavSection
            titleHref="/wheels"
            title={t("navigation.rimsTires.title")}
            links={[
              {
                title: t("navigation.rimsTires.autobelloWheels"),
                href: "/wheels?brand=AUTOBELLO",
              },
              {
                title: t("navigation.rimsTires.etkWheels"),
                href: "/wheels?brand=ETK",
              },
              {
                title: t("navigation.rimsTires.folkWheels"),
                href: "/wheels?brand=FOLK",
              },
              {
                title: t("navigation.rimsTires.gavrilWheels"),
                href: "/wheels?brand=GAVRIL",
              },
              {
                title: t("navigation.rimsTires.ibishuWheels"),
                href: "/wheels?brand=IBISHU",
              },
            ]}
          />
          <NavSection
            titleHref="#"
            title={t("navigation.careers.title")}
            links={[
              {
                title: t("navigation.careers.openPositions"),
                href: "#",
              },
              {
                title: t("navigation.careers.internshipProgram"),
                href: "#",
              },
              {
                title: t("navigation.careers.carJockeyRequirements"),
                href: "#",
              },
            ]}
          />
          <NavSection
            titleHref="#"
            title={t("navigation.helpCenter.title")}
            links={[
              {
                title: t("navigation.helpCenter.questionAnswers"),
                href: "#",
              },
              {
                title: t("navigation.helpCenter.sellYourCar"),
                href: "#",
              },
              {
                title: t("navigation.helpCenter.delivery"),
                href: "#",
              },
              {
                title: t("navigation.helpCenter.contact"),
                href: "#",
              },
            ]}
          />
          <NavSection
            titleHref="#"
            title={t("navigation.about.title")}
            links={[
              {
                title: t("navigation.about.ourCompany"),
                href: "#",
              },
              {
                title: t("navigation.about.whereToFindUs"),
                href: "#",
              },
              {
                title: t("navigation.about.feedback"),
                isTargetBlank: true,
                href: "https://quarrysideauto.featurebase.app/",
              },
            ]}
          />
        </div>

        <div className="pt-8 flex justify-between gap-2">
          <ThemeSwitcher />
          <LocaleSwitcher />
        </div>
      </Container>
    </footer>
  );
}
