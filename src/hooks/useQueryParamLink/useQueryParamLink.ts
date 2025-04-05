import { useCallback } from "react";

import { usePathname, useSearchParams } from "next/navigation";

import { PageSearchParams } from "@/types";

/**
 * Handler for generating links from URL query parameters
 * @param queryParams The current page query parameters
 */
export default function useQueryParamLink(queryParams: PageSearchParams) {
  const pathname = usePathname();
  const searchParams = useSearchParams() ?? {};

  /** Handles the query parameter links with a single values */
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

  /** Handles the query parameter links with multiple values */
  const createQueryStringMulti = useCallback(
    (paramName: string, paramValue: string) => {
      const params = new URLSearchParams(searchParams.toString());

      const currentParamValues: string[] =
        queryParams[paramName]?.split(",") ?? [];

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

      if (!queryParams[paramName] && !!paramValue) {
        // Set the value from a non-existing search param
        params.set(paramName, paramValue);
      }

      // Reset the pagination
      if (paramName !== "page") {
        params.set("page", "1");
      }

      return params.toString();
    },
    [queryParams, searchParams],
  );

  /**
   * Generates a link from a query parameter
   * Handles one or multiple values for a query parameter
   * @param name The relate query parameter name
   * @param value The relate query parameter value
   * @param allowMultipleValues If set to `true`, the query parameter accepts multiple values
   * @example
   * // https://domain.com?foo=bar
   * const { getQueryParamLink } = useQueryParamLink(searchParams);
   * const deletion = getQueryParamLink('foo', 'bar'); // https://domain.com
   * const singleValue = getQueryParamLink('foo', 'baz'); // https://domain.com?foo=baz
   * const multipleValues = getQueryParamLink('foo', 'baz', true); // https://domain.com?foo=bar,baz
   */
  const getQueryParamLink = useCallback(
    (name: string, value: string, allowMultipleValues?: boolean) => {
      const baseURL = `${pathname}?`;
      if (allowMultipleValues) {
        return baseURL + createQueryStringMulti(name, value);
      }
      return baseURL + createQueryString(name, value);
    },
    [createQueryString, createQueryStringMulti, pathname],
  );

  return getQueryParamLink;
}
