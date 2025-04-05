import { useMemo } from "react";

import { useSearchParams } from "next/navigation";

import { APPLIED_FILTER_BLACKLIST } from "@/constants";

/**
 * Returns the number of active query parameters from the URL
 * @returns {number}
 * @example
 * // https://domain.com?filter1=value&filter2=value,othervalue
 * const activeFiltersCount = useQueryParamCount(); // 2
 */
export default function useQueryParamCount() {
  const searchParams = useSearchParams();

  const activeFilterCount = useMemo(() => {
    let count = 0;
    for (const param of searchParams.keys()) {
      if (!APPLIED_FILTER_BLACKLIST.includes(param)) {
        count += 1;
      }
    }
    return count;
  }, [searchParams.keys()]);

  return activeFilterCount;
}
