import type { HomeSectionProps } from ".";

export default function HomeSection({ title, children }: HomeSectionProps) {
  return (
    <section>
      <h2 className="text-lg font-bold pb-5">{title}</h2>
      {children}
    </section>
  );
}
