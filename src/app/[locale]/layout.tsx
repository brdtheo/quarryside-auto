import { Metadata } from "next";
import type { Viewport } from "next";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { Inter } from "next/font/google";
import { notFound } from "next/navigation";

import clsx from "clsx";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

import { routing } from "@/i18n/routing";

import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Quarryside auto",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={clsx(
          inter.className,
          "bg-background dark:bg-backgrounddark",
        )}
      >
        <NextIntlClientProvider>
          <Header />
          <SubHeader />
          <main
            className="pt-16 md:pt-0"
            style={{
              minHeight: "calc(100dvh - 72px - 38px)",
            }}
          >
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
