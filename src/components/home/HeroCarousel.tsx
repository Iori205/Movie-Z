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
    Autoplay({ delay: 4000, stopOnInteraction: true })
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
    <div className="relative w-full">
      <Carousel
        className="w-full relative"
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
        
        {/* Navigation buttons with glassmorphism */}
        <div className="sm:block hidden">
          <CarouselPrevious className="left-8 size-12 glass border-0 text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300" />
        </div>
        <div className="sm:block hidden">
          <CarouselNext className="right-8 size-12 glass border-0 text-foreground hover:bg-primary/20 hover:text-primary transition-all duration-300" />
        </div>

        {/* Progress indicators */}
        <div className="sm:flex hidden gap-3 absolute bottom-12 left-1/2 -translate-x-1/2">
          {Array.from({ length: count }).map((_, index) => (
            <button
              onClick={() => {
                api?.scrollTo(index);
              }}
              key={index}
              className={`h-1 rounded-full transition-all duration-500 ${
                index + 1 === current 
                  ? "w-8 bg-primary glow-cyan" 
                  : "w-4 bg-foreground/30 hover:bg-foreground/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background via-background/80 to-transparent pointer-events-none" />
    </div>
  );
};
