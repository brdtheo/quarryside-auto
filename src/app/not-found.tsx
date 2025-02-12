import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

import Container from "@/components/Container";

export default function NotFound() {
  const { t } = useTranslation("common");

  return (
    <Container className="m-auto gap-8 flex flex-col py-12">
      <div className="flex flex-col gap-2 w-96">
        <h1 className="text-2xl font-bold">{t("notFoundTitle")}</h1>
        <p>{t("notFoundDescription")}</p>
      </div>

      <Image
        className="rounded shadow-sm w-[320px] h-[180px]"
        width={320}
        height={180}
        src="https://media1.tenor.com/m/Rf4oINrw45AAAAAC/beam-ng-drive-beam.gif"
        alt="Bouncing covet GIF"
      />
    </Container>
  );
}
