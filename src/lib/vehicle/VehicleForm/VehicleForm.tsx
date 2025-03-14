import { getTranslations } from "next-intl/server";

import Button from "@/components/Button";
import TextField from "@/components/TextField";

export default async function VehicleForm() {
  const t = await getTranslations("vehicles");

  return (
    <form
      aria-label="Vehicle Form"
      action="#"
      noValidate
      className="bg-background dark:bg-black rounded py-8 px-4 flex flex-col gap-6"
    >
      <h2 className="font-semibold text-base">{t("form.title")}</h2>

      <div className="grid grid-cols-2 gap-2">
        <TextField
          className="col-span-2 @md/vehicleform:col-span-1 w-full"
          placeholder={t("form.field.firstName")}
          value=""
        />
        <TextField
          className="col-span-2 @md/vehicleform:col-span-1 w-full"
          placeholder={t("form.field.lastName")}
          value=""
        />
        <TextField
          className="col-span-2 @md/vehicleform:col-span-1 w-full"
          placeholder={t("form.field.email")}
          value=""
        />
        <TextField
          className="col-span-2 @md/vehicleform:col-span-1 w-full"
          placeholder={t("form.field.phone")}
          value=""
        />
        <TextField
          className="col-span-2 h-24"
          placeholder={t("form.field.message")}
          isTextArea
          value=""
        />
      </div>

      <div className="flex flex-col gap-2">
        <Button color="primary" size="lg" rounded>
          {t("checkAvailability")}
        </Button>
        <Button color="secondary" rounded>
          {t("scheduleTestDrive")}
        </Button>
      </div>
    </form>
  );
}
