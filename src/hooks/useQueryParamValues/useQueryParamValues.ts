import { useSearchParams } from "next/navigation";

/**
 * Returns the values associated with a query parameter from the URL.
 * @param name The parameter name to retrieve values from.
 * @param countOnly If true, returns the count of values instead of the array.
 * @returns {string[] | number}
 * @example
 * // URL: https://domain.com?filter1=value&filter2=value,othervalue
 * const values = useQueryParamValues('filter1'); // ['value']
 * const count = useQueryParamValues('filter2', true); // 2
 */
export default function useQueryParamValues(name: string): string[];
export default function useQueryParamValues(
  name: string,
  countOnly: true,
): number;
export default function useQueryParamValues(name: string, countOnly?: boolean) {
  const searchParams = useSearchParams();
  const queryParamValueString = searchParams?.getAll(name)?.[0];
  const values = queryParamValueString ? queryParamValueString.split(",") : [];

  return countOnly ? values.length : values;
}
