import { useCallback } from "react";

import { usePathname, useSearchParams } from "next/navigation";

import { APPLIED_FILTER_BLACKLIST } from "@/constants";

import type { PageSearchParams } from "@/types";

/**
 * Handles URL query params related to filtering/pagination
 * @param {PageSearchParams} pageSearchParams The current page query params
 */
export default function useURLSearchParams(pageSearchParams: PageSearchParams) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /**
   * Retrieve the total number of search params
   */
  const getActiveFilterCount = useCallback(() => {
    const paramList: string[] = [];
    if (!searchParams) {
      return paramList.length;
    }

    for (const [param, value] of searchParams.entries()) {
      if (!APPLIED_FILTER_BLACKLIST.includes(param)) {
        paramList.push(value);
      }
    }
    return paramList.length;
  }, [searchParams]);

  /**
   * Retrieve the number of values associated with a search param
   */
  const getSearchParamValueCount = useCallback(
    (paramName: string) => {
      const values = pageSearchParams[paramName]?.split(",") ?? [];
      return values.length;
    },
    [pageSearchParams],
  );

  /**
   * Returns an URL while handling the search param with a single value
   */
  const createQueryString = useCallback(
    (paramName: string, paramValue: string) => {
      const params = new URLSearchParams(searchParams.toString());
      const pageParam = params.get("page");

      // Handle param value
      if (paramValue) {
        params.set(paramName, encodeURIComponent(paramValue));
      } else {
        params.delete(paramName);
      }

      // Reset the pagination
      if (!!pageParam && paramName !== "page") {
        params.set("page", "1");
      }

      return params.toString();
    },
    [searchParams],
  );

  /**
   * Returns an URL while handling the search param with multiple values
   */
  const createQueryStringMulti = useCallback(
    (paramName: string, paramValue: string) => {
      const params = new URLSearchParams(searchParams.toString());

      const currentParamValues: string[] =
        pageSearchParams[paramName]?.split(",") ?? [];

      if (
        currentParamValues.length === 1 &&
        !!paramValue &&
        currentParamValues.includes(paramValue)
      ) {
        // Remove the entire param if the value already exists and only 1 value
        params.delete(paramName);
      }

      if (
        !!paramValue &&
        !!currentParamValues.includes(paramValue) &&
        currentParamValues.length > 1
      ) {
        // Remove a value from the existing search param
        const newParamValues = currentParamValues
          .filter((value) => value !== paramValue)
          .join(",");
        params.set(paramName, newParamValues);
      }

      if (!!paramValue && !currentParamValues.includes(paramValue)) {
        // Add a value from the existing search param
        const newParamValues = [currentParamValues, paramValue].join(",");
        params.set(paramName, newParamValues);
      }

      if (!pageSearchParams[paramName] && !!paramValue) {
        // Set the value from a non-existing search param
        params.set(paramName, paramValue);
      }

      // Reset the pagination
      if (paramName !== "page") {
        params.set("page", "1");
      }

      return params.toString();
    },
    [pageSearchParams, searchParams],
  );

  const getUpdatedURLFromSearchParam = useCallback(
    (paramName: string, paramValue: string, isMulti?: boolean) => {
      const baseURL = `${pathname}?`;
      if (isMulti) {
        return baseURL + createQueryStringMulti(paramName, paramValue);
      }
      return baseURL + createQueryString(paramName, paramValue);
    },
    [createQueryString, createQueryStringMulti, pathname],
  );

  return {
    getUpdatedURLFromSearchParam,
    getSearchParamValueCount,
    getActiveFilterCount,
  };
}
