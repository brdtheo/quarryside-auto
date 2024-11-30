import type { CarDetailSectionProps } from ".";

export default function CarDetailSection({
  title,
  children,
}: CarDetailSectionProps) {
  return (
    <section className="flex flex-col gap-8">
      <h2 className="text-xl font-semibold">{title}</h2>
      {children}
    </section>
  );
}
