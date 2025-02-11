import type { ListFilterAsideSectionProps } from "@/components/ListFilterAsideSection";

import type { PageSearchParams } from "@/types";

export type ListFilterAsideProps = {
  sections: ListFilterAsideSectionProps[];
  searchParams: Record<PageSearchParams>;
  nameSpace: string;
};

export type AppliedListFilter = {
  paramName: string;
  paramValue: string;
  deleteHref: string;
};
