import Image from "next/image";

import {
  RenderSlideProps,
  Slide,
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

export default function MediaListSlide({ slide }: RenderSlideProps<Slide>) {
  const {
    on: { click },
    carousel: { imageFit },
  } = useLightboxProps();

  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);

  if (!isNextJsImage(slide as SlideImage) || !slide) {
    return undefined;
  }

  return (
    <div className="relative">
      <Image
        fill
        alt={(slide as SlideImage).alt as string}
        src={(slide as SlideImage).src}
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
