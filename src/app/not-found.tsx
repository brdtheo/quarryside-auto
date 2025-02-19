import useTranslation from "next-translate/useTranslation";
import Image from "next/image";

import Container from "@/components/Container";

export default function NotFound() {
  const { t } = useTranslation("common");

  return (
    <Container className="m-auto gap-8 flex flex-col py-12">
      <div className="flex flex-col gap-2 w-full md:w-96">
        <h1 className="text-2xl font-bold">{t("notFoundTitle")}</h1>
        <p>{t("notFoundDescription")}</p>

        <Image
          className="rounded"
          width={320}
          height={182}
          src="https://i.ibb.co/dwFfzdbQ/covet-3.gif"
          alt="Bouncing covet GIF"
        />
      </div>
    </Container>
  );
}
