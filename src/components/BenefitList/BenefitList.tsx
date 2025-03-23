import { useTranslations } from "next-intl";

import {
  IconHeartHandshake,
  IconPigMoney,
  IconSteeringWheel,
  IconUsersGroup,
} from "@tabler/icons-react";

import BenefitCard from "@/components/BenefitCard";
import HomeSection from "@/components/HomeSection";

export default function BenefitList() {
  const t = useTranslations("home");
  return (
    <HomeSection title={t("benefitList.title")}>
      <ul className="grid grid-cols-1 gap-4 @md/homecontainer:grid-cols-2 @4xl/homecontainer:grid-cols-4">
        <li>
          <BenefitCard
            title={t("benefitList.delivery.title")}
            description={t("benefitList.delivery.description")}
            icon={IconSteeringWheel}
          />
        </li>
        <li>
          <BenefitCard
            title={t("benefitList.guarantee.title")}
            description={t("benefitList.guarantee.description")}
            icon={IconHeartHandshake}
          />
        </li>
        <li>
          <BenefitCard
            title={t("benefitList.financing.title")}
            description={t("benefitList.financing.description")}
            icon={IconPigMoney}
          />
        </li>
        <li>
          <BenefitCard
            title={t("benefitList.community.title")}
            description={t("benefitList.community.description")}
            icon={IconUsersGroup}
          />
        </li>
      </ul>
    </HomeSection>
  );
}
