import ListFilterAsideSection from "@/components/ListFilterAsideSection";

import type { ListFilterAsideProps } from "./listfilteraside";

export default function ListFilterAside({ sections }: ListFilterAsideProps) {
  return (
    <aside className="w-60 flex flex-col gap-4">
      <form className="flex flex-col gap-4">
        {(sections ?? []).map((section, index) => (
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
