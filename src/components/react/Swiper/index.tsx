import { useRef, type ComponentProps, type RefCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import mediumZoom, { type Zoom, type ZoomOptions } from "medium-zoom";

export function EmblaCarousel({ themeThumbs }: { themeThumbs: string[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container h-48 md:h-72">
        {themeThumbs.map((thumb) => (
          <div className="embla__slide text-center" key={thumb}>
            <ImageZoom src={thumb} className="h-full inline-block" />
          </div>
        ))}
      </div>
    </div>
  );
}

type ImageZoomProps = ComponentProps<"img"> & {
  options?: ZoomOptions;
};

export function ImageZoom({ options, ...props }: ImageZoomProps) {
  const zoomRef = useRef<Zoom | null>(null);

  function getZoom() {
    if (zoomRef.current === null) {
      zoomRef.current = mediumZoom(options);
    }

    return zoomRef.current;
  }

  const attachZoom: RefCallback<HTMLImageElement> = (node) => {
    const zoom = getZoom();

    if (node) {
      zoom.attach(node);
    } else {
      zoom.detach();
    }
  };

  return <img {...props} ref={attachZoom} />;
}
