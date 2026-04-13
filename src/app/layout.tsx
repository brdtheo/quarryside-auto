import { OpenPanelComponent } from "@openpanel/nextjs";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: Props) {
  return (
    <>
      <OpenPanelComponent
        apiUrl="https://analytics-api.brdtheo.com"
        clientId="caca0f2b-f7ed-4ade-85ea-e30a1e0d7371"
        trackScreenViews={true}
        trackAttributes={true}
        trackOutgoingLinks={true}
      />
      {children}
    </>
  );
}
