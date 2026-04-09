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
    <CarouselItem key={movie.id} className="basis-none">
      <HeroCard
        image={movie.backdrop_path}
        label="Now Playing:"
        title={movie.title}
        score={movie.vote_average}
        description={movie.overview}
        trailerKey={trailerKey}
        href={`/details/${movie.id}`}
      />

      <HeroCarouselItemMobileComp movie={movie} trailerKey={trailerKey} />
    </CarouselItem>
  );
};
