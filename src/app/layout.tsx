import type { Metadata } from "next";
import { Inter } from "next/font/google";

import clsx from "clsx";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SubHeader from "@/components/SubHeader";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Quarryside auto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactElement;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, "bg-background")}>
        <Header />
        <SubHeader />
        <main
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
