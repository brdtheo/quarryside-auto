"use client";

import { useCallback, useMemo, useState } from "react";

import Image from "next/image";

import MediaListSkeleton from "@/lib/media/MediaList/MediaListSkeleton";
import MediaListSlide from "@/lib/media/MediaList/MediaListSlide";
import {
  MEDIA_PREVIEW_ITEM_HEIGHT,
  MEDIA_PREVIEW_ITEM_WIDTH,
  MEDIA_THUMBNAIL_HEIGHT,
  MEDIA_THUMBNAIL_WIDTH,
} from "@/lib/media/MediaList/constants";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import type { MediaListProps } from ".";

export default function MediaList({ mediaList, alt }: MediaListProps) {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [index, setIndex] = useState<number | null>(null);

  const toggleOpenLightbox = useCallback(() => {
    setIsLightboxOpen((state) => !state);
  }, []);

  const handleMediaClick = useCallback(
    (index: number) => () => {
      setIndex(index);
      toggleOpenLightbox();
    },
    [],
  );

  const thumbnail = useMemo(
    () => (mediaList ?? []).find((media) => media.is_thumbnail),
    [],
  );

  const lightboxSlides = useMemo(
    () =>
      mediaList.map((media) => ({
        src: media.url,
        alt,
      })),
    [],
  );

  if ((mediaList ?? []).length === 0 || !thumbnail)
    return <MediaListSkeleton />;

  return (
    <div className="flex flex-col items-start gap-2 flex-1 @4xl/detailsrightcolumn:flex-row @7xl/detailsrightcolumn:flex-col">
      <button
        aria-label="Expand media thumbnail image"
        role="button"
        className="w-fit"
        onClick={handleMediaClick(0)}
      >
        <Image
          className="overflow-hidden rounded"
          width={MEDIA_THUMBNAIL_WIDTH}
          height={MEDIA_THUMBNAIL_HEIGHT}
          src={thumbnail.url}
          alt={alt}
        />
      </button>
      <ul className="flex flex-wrap gap-1 @4xl/detailsrightcolumn:max-w-[300px] @7xl/detailsrightcolumn:max-w-none">
        {(mediaList ?? []).map(
          (media, index) =>
            media && (
              <li key={index}>
                <button
                  aria-label="Select and expand media image"
                  role="button"
                  onClick={handleMediaClick(index)}
                >
                  <Image
                    className="overflow-hidden rounded"
                    width={MEDIA_PREVIEW_ITEM_WIDTH}
                    height={MEDIA_PREVIEW_ITEM_HEIGHT}
                    src={media.url}
                    alt={alt}
                  />
                </button>
              </li>
            ),
        )}
      </ul>

      <Lightbox
        carousel={{ finite: lightboxSlides.length <= 1 }}
        index={index ?? undefined}
        open={isLightboxOpen}
        close={toggleOpenLightbox}
        slides={lightboxSlides}
        render={{
          slide: MediaListSlide,
          buttonPrev: lightboxSlides.length <= 1 ? () => null : undefined,
          buttonNext: lightboxSlides.length <= 1 ? () => null : undefined,
        }}
      />
    </div>
  );
}
