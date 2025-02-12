import type { DetailSectionProps } from ".";

export default function DetailSection({ title, children }: DetailSectionProps) {
  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
