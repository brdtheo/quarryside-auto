import { IconQuote } from "@tabler/icons-react";

import type { ClientFeedbackProps } from ".";

export default function ClientFeedback({
  children,
  author,
  date,
}: ClientFeedbackProps) {
  return (
    <article className="rounded bg-white dark:bg-blacksecondary border border-divider dark:border-transparent px-4 py-6 h-fit">
      <div className="inline-flex flex-1 w-full">
        <IconQuote className="w-5 rotate-180" size={20} />
        <q className="text-base text-center inline-flex flex-1 px-2 before:content-[''] after:content-['']">
          {children}
        </q>
        <IconQuote className="w-5" size={20} />
      </div>

      <div className="text-gray-500 flex justify-between text-sm pt-4">
        <address>{author}</address>
        <time>{date}</time>
      </div>
    </article>
  );
}
