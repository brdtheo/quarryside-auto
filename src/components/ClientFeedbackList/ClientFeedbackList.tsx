import { getTranslations } from "next-intl/server";

import ClientFeedback from "@/components/ClientFeedback";
import HomeSection from "@/components/HomeSection";

export default async function ClientFeedbackList() {
  const t = await getTranslations("home");
  return (
    <HomeSection title={t("feedback.title")}>
      <ul className="grid grid-cols-1 gap-4 @md/homecontainer:grid-cols-2 @3xl/homecontainer:grid-cols-3">
        <li>
          <ClientFeedback
            author={t("feedback.0.author")}
            date={t("feedback.0.date")}
          >
            {t("feedback.0.quote")}
          </ClientFeedback>
        </li>
        <li>
          <ClientFeedback
            author={t("feedback.1.author")}
            date={t("feedback.1.date")}
          >
            {t("feedback.1.quote")}
          </ClientFeedback>
        </li>
        <li>
          <ClientFeedback
            author={t("feedback.2.author")}
            date={t("feedback.2.date")}
          >
            {t("feedback.2.quote")}
          </ClientFeedback>
        </li>
      </ul>
    </HomeSection>
  );
}
