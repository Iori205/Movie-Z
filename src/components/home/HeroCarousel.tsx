"use client";
import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui";
import Autoplay from "embla-carousel-autoplay";
import { MovieType } from "@/types";
import { HeroCarouselItem } from "@/components/home";

type HeroCarouselProps = {
  movies: MovieType[];
};

export const HeroCarousel = ({ movies }: HeroCarouselProps) => {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );
  React.useEffect(() => {
    if (!api) {
      return;
    }
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => setCurrent(api.selectedScrollSnap() + 1));
  }, [api]);

  return (
    <Carousel
      className="sm:w-[1440px] w-full sm:h-150 aspect-[125/82] relative"
      setApi={setApi}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {movies.slice(0, 5).map((movie) => (
          <HeroCarouselItem key={movie.id} movie={movie} />
        ))}
      </CarouselContent>
      <div className="sm:block hidden">
        <CarouselPrevious className="left-11 size-10" />
      </div>
      <div className="sm:block hidden">
        <CarouselNext className="right-11 size-10" />
      </div>

      <div className="sm:flex hidden gap-2 absolute bottom-[37px] left-170">
        {Array.from({ length: count }).map((_, index) => (
          <div
            onClick={() => {
              api?.scrollTo(index);
            }}
            key={index}
            className={`w-2 h-2 rounded-full ${
              index + 1 === current ? "bg-white" : "bg-white opacity-80"
            }`}
          />
        ))}
      </div>
    </Carousel>
  );
};
