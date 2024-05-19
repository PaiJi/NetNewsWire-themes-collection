import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel({ themeThumbs }: { themeThumbs: string[] }) {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {themeThumbs.map((thumb) => (
          <div className="embla__slide" key={thumb}>
            <img src={thumb} />
          </div>
        ))}
      </div>
    </div>
  );
}
