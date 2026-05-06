"use client";
import React, { useEffect, useState } from "react";
import { HeroCard, HeroCarouselItemMobileComp } from "@/components/home";
import { CarouselItem } from "@/components/ui";
import { MovieType, movieTrailerResponseType } from "@/types";
import { getMovieTrailer } from "@/utils/get-data";

export const HeroCarouselItem = ({ movie }: { movie: MovieType }) => {
  const [trailerKey, setTrailerKey] = useState("");

  const getTrailerFunction = async () => {
    const movieTrailer: movieTrailerResponseType = await getMovieTrailer(
      movie.id.toString()
    );
    const trailer = movieTrailer.results.find(
      (trailer) => trailer.type === "Trailer"
    );
    setTrailerKey(trailer?.key || "");
  };

  useEffect(() => {
    getTrailerFunction();
  }, []);

  return (
    <CarouselItem key={movie.id} className="basis-full pl-0">
      {/* Desktop view */}
      <div className="sm:block hidden">
        <HeroCard
          image={movie.backdrop_path}
          label="Now Playing"
          title={movie.title}
          score={movie.vote_average}
          description={movie.overview}
          trailerKey={trailerKey}
          href={`/details/${movie.id}`}
        />
      </div>
      
      {/* Mobile view */}
      <div className="sm:hidden block">
        <div className="relative h-[50vh]">
          <div className="absolute inset-0">
            {movie.backdrop_path && (
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>
        </div>
        <HeroCarouselItemMobileComp movie={movie} trailerKey={trailerKey} />
      </div>
    </CarouselItem>
  );
};
