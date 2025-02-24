import Image from "next/image";

import {
  RenderSlideProps,
  SlideImage,
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
} from "yet-another-react-lightbox";

function isNextJsImage(slide: SlideImage) {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
}

export default function MediaListSlide({
  slide,
}: RenderSlideProps<SlideImage>) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide) || !slide) {
    return undefined;
  }

  return (
    <div className="relative">
      <Image
        fill
        alt={slide.alt as string}
        src={slide.src}
        loading="eager"
        draggable={false}
        style={{
          objectFit: cover ? "cover" : "contain",
          cursor: click ? "pointer" : undefined,
        }}
      />
    </div>
  );
}
