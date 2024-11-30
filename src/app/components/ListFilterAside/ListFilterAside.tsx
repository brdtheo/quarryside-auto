import ListFilterAsideSection from "@/components/ListFilterAsideSection";

import type { ListFilterAsideProps } from "./listfilteraside";

export default function ListFilterAside({}: ListFilterAsideProps) {
  const yearFilterRange = [1980, 2024];

  const yearsFilterOptions = Array.from(
    { length: yearFilterRange[1] - yearFilterRange[0] + 1 },
    (_, index) => {
      const year = yearFilterRange[0] + index;
      return {
        label: `${year}`,
        value: `${year}`,
        isChecked: false,
      };
    },
  );

  return (
    <aside className="w-60 flex flex-col gap-4">
      <form className="flex flex-col gap-4">
        <ListFilterAsideSection
          title="Condition"
          options={[
            { label: "Used", value: "used", isChecked: true },
            { label: "Junkyard", value: "junkyard", isChecked: false },
          ]}
          onChange={() => {}}
        />

        <ListFilterAsideSection
          title="Brand"
          isSearchable
          options={[
            { label: "No brand", value: "no-brand", isChecked: false },
            { label: "Alder", value: "alder", isChecked: false },
            { label: "Autobello", value: "autobello", isChecked: false },
            { label: "Gavril", value: "gavril", isChecked: false },
            { label: "Cherrier", value: "cherrier", isChecked: false },
          ]}
          onChange={() => {}}
        />

        <ListFilterAsideSection
          title="Cylinders"
          options={[
            { label: "4 cylinders", value: "4", isChecked: false },
            { label: "6 cylinders", value: "6", isChecked: false },
            { label: "8 cylinders", value: "8", isChecked: false },
            { label: "10 cylinders", value: "10", isChecked: false },
            { label: "12 cylinders", value: "12", isChecked: false },
          ]}
          onChange={() => {}}
        />

        <ListFilterAsideSection
          title="Transmission"
          options={[
            { label: "FWD", value: "FWD", isChecked: false },
            { label: "RWD", value: "RWD", isChecked: false },
            { label: "AWD", value: "AWD", isChecked: false },
            { label: "4WD", value: "4WD", isChecked: false },
          ]}
          onChange={() => {}}
        />

        <ListFilterAsideSection
          title="Year"
          isSearchable
          options={yearsFilterOptions}
          onChange={() => {}}
        />

        <ListFilterAsideSection
          title="Features"
          options={[
            {
              label: "BeamNavigator",
              value: "beam-navigator",
              isChecked: false,
            },
          ]}
          onChange={() => {}}
        />
      </form>
    </aside>
  );
}
