import type { Metadata } from "next";
import useTranslation from "next-translate/useTranslation";
import { Inter, Pixelify_Sans } from "next/font/google";
import Image from "next/image";

import clsx from "clsx";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Quarryside auto",
};

function WorkInProgressLayout() {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={clsx(pixelify.className, "bg-white")}>
        <main
          className="flex justify-center items-center"
          style={{
            minHeight: "100dvh",
          }}
        >
          <div className="text-center select-none">
            <Image
              width={148}
              height={148}
              src="https://art.pixilart.com/ffed9cba2f9d72d.png"
              alt="BeamNG.drive logo"
            />
            <p className="text-lg font-medium">work in progress</p>
          </div>
        </main>
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  const { lang } = useTranslation("common");

  const isProduction = process.env.VERCEL_ENV === "production";

  if (isProduction) return <WorkInProgressLayout />;

  return (
    <html lang={lang}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body
        className={clsx(
          inter.className,
          "bg-background dark:bg-backgrounddark",
        )}
      >
        <Header />
        <SubHeader />
        <main
          className="pt-[72px] md:pt-0"
          style={{
            minHeight: "calc(100dvh - 72px - 38px)",
          }}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
