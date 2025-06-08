import { ReactNode } from "react";

import PlausibleProvider from "next-plausible";

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return (
    <PlausibleProvider
      customDomain="https://analytics.brdtheo.com/"
      selfHosted
      trackLocalhost
      domain="quarryside-auto.com"
    >
      {children}
    </PlausibleProvider>
  );
}
