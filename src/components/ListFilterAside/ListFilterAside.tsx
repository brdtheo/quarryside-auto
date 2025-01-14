"use client";

import ListFilterAsideSection, {
  ListFilterAsideSectionProps,
} from "@/components/ListFilterAsideSection";

import { VehicleBrand } from "@/lib/vehicle/types";

const yearFilterRange = [1980, 2024];

export const VEHICLE_LIST_FILTER_SECTION: ListFilterAsideSectionProps[] = [
  {
    title: "Condition",
    options: [
      { label: "Used", value: "used", isChecked: true },
      { label: "Junkyard", value: "junkyard", isChecked: false },
    ],
    isSearchable: false,
    onChange: () => {},
  },
  {
    title: "Brand",
    options: Object.values(VehicleBrand).map((brand) => ({
      label: brand,
      value: brand.toLowerCase(),
      isChecked: false,
    })),
    isSearchable: true,
    onChange: () => {},
  },
  {
    title: "Cylinders",
    options: [
      { label: "4 cylinders", value: "4", isChecked: false },
      { label: "6 cylinders", value: "6", isChecked: false },
      { label: "8 cylinders", value: "8", isChecked: false },
      { label: "10 cylinders", value: "10", isChecked: false },
      { label: "12 cylinders", value: "12", isChecked: false },
    ],
    isSearchable: false,
    onChange: () => {},
  },
  {
    title: "Transmission",
    options: [
      { label: "FWD", value: "FWD", isChecked: false },
      { label: "RWD", value: "RWD", isChecked: false },
      { label: "AWD", value: "AWD", isChecked: false },
      { label: "4WD", value: "4WD", isChecked: false },
    ],
    isSearchable: false,
    onChange: () => {},
  },
  {
    title: "Year",
    options: Array.from(
      { length: yearFilterRange[1] - yearFilterRange[0] + 1 },
      (_, index) => {
        const year = yearFilterRange[0] + index;
        return {
          label: `${year}`,
          value: `${year}`,
          isChecked: false,
        };
      },
    ),

    isSearchable: true,
    onChange: () => {},
  },
  {
    title: "Features",
    options: [
      { label: "BeamNavigator", value: "beam-navigator", isChecked: false },
    ],
    isSearchable: false,
    onChange: () => {},
  },
];

export default function ListFilterAside() {
  return (
    <aside className="w-60 flex flex-col gap-4">
      <form className="flex flex-col gap-4">
        {(VEHICLE_LIST_FILTER_SECTION ?? []).map((section, index) => (
          <ListFilterAsideSection
            key={index}
            title={section.title}
            options={section.options}
            onChange={section.onChange}
            isSearchable={section.isSearchable}
          />
        ))}
      </form>
    </aside>
  );
}
