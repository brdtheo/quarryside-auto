import type { BenefitCardProps } from ".";

export default function BenefitCard({
  title,
  description,
  icon,
}: BenefitCardProps) {
  const props = { icon };
  return (
    <article>
      <div className="px-6 py-4 rounded flex flex-col bg-secondary/40">
        <div className="text-primary/90 dark:text-primarydark/90 flex justify-center">
          <props.icon size={64} stroke={1.5} />
        </div>
        <h2 className="text-primary dark:text-primarydark text-center text-lg font-semibold">
          {title}
        </h2>
        <p className="text-sm text-center pt-2 leading-6">{description}</p>
      </div>
    </article>
  );
}
