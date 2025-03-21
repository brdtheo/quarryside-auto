import Image from "next/image";

import dayjs from "dayjs";

import Chip from "@/components/Chip";

import MediaSkeleton from "@/lib/media/MediaSkeleton";

import { Link } from "@/i18n/routing";

import type { BlogPostProps } from ".";

export default function BlogPost({
  thumbnailUrl,
  thumbnailAlt,
  tags,
  title,
  content,
  author,
  date,
}: BlogPostProps) {
  const formattedDatetime = dayjs(date).format("YYYY-MM-DD");

  return (
    <article className="@container/postcard">
      <Link
        href="#"
        className="border border-divider dark:border-transparent rounded flex flex-col w-full bg-white dark:bg-blacksecondary bg-clip-content overflow-hidden"
      >
        <div className="@lg/postcard:w-[288px] @md/postcard:h-[206px] w-full flex self-center h-48 @sm/postcard:h-64 relative">
          {!thumbnailUrl && <MediaSkeleton className="w-full h-full" />}
          {!!thumbnailUrl && (
            <Image
              src={thumbnailUrl}
              sizes="500px"
              alt={thumbnailAlt}
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="flex flex-col pt-4 pb-3 px-4">
          {tags?.length > 0 && (
            <ul className="flex flex-wrap gap-1">
              {(tags ?? []).map((tag, index) => (
                <li key={index}>
                  <Chip>{tag}</Chip>
                </li>
              ))}
            </ul>
          )}
          <h2
            title={title}
            className="text-lg font-medium leading-6 line-clamp-3 @xs/postcard:line-clamp-2 pt-2 pb-1"
          >
            {title}
          </h2>
          <p className="line-clamp-3 @xs/postcard:line-clamp-4 text-gray-500 dark:text-white/80 text-sm">
            {content}
          </p>
        </div>

        <footer className="flex justify-between pt-1 px-4 pb-2 text-xs">
          <address>{author}</address>
          <time dateTime={formattedDatetime}>{date}</time>
        </footer>
      </Link>
    </article>
  );
}
