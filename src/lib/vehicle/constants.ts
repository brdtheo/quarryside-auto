import type { SelectOption } from "@/components/Select";

export const vehicleSortOptionList: SelectOption[] = [
  { label: "Price - low to high", value: "price-asc" },
  { label: "Price - high to low", value: "price-desc" },
  { label: "Mileage - low to high", value: "miles-asc" },
  { label: "Mileage - high to low", value: "miles-desc" },
  { label: "Year - Oldest first", value: "year-asc" },
  { label: "Year - Most recent first", value: "year-desc" },
];
