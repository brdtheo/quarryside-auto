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
import { Captions } from "yet-another-react-lightbox/plugins";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import "yet-another-react-lightbox/styles.css";

import type { MediaListProps } from ".";

export default function MediaList({ mediaList }: MediaListProps) {
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
      })),
    [],
  );

  if ((mediaList ?? []).length === 0 || !thumbnail)
    return <MediaListSkeleton />;

  return (
    <div className="flex flex-col gap-2 flex-1">
      <button onClick={handleMediaClick(0)}>
        <Image
          className="overflow-hidden rounded"
          width={MEDIA_THUMBNAIL_WIDTH}
          height={MEDIA_THUMBNAIL_HEIGHT}
          src={thumbnail.url}
          alt={thumbnail.url}
        />
      </button>
      <ul className="flex flex-wrap gap-1">
        {(mediaList ?? []).map(
          (media, index) =>
            media && (
              <li key={index}>
                <button onClick={handleMediaClick(index)}>
                  <Image
                    className="overflow-hidden rounded"
                    width={MEDIA_PREVIEW_ITEM_WIDTH}
                    height={MEDIA_PREVIEW_ITEM_HEIGHT}
                    src={media.url}
                    alt={thumbnail.url}
                  />
                </button>
              </li>
            ),
        )}
      </ul>

      <Lightbox
        index={index ?? undefined}
        open={isLightboxOpen}
        close={toggleOpenLightbox}
        slides={lightboxSlides}
        render={{ slide: MediaListSlide }}
        plugins={[Captions]}
        captions={{ showToggle: true, descriptionTextAlign: "center" }}
      />
    </div>
  );
}
