import type { UrlObject } from "url";

/** A common type for URL query parameters */
export type PageSearchParams = Record<string, string>;

/** A common type that represents page props */
export type PageProps = { searchParams: Promise<PageSearchParams> };

/** Common type used by href from Link elements */
export type Url = string | UrlObject;

/** A common type that represents details page props */
export type DetailsPageProps = {
  params: Promise<{ slug: string }>;
};

/** A common type used for Factories */
export type FactoryOptions = {
  withMedia?: boolean;
};
