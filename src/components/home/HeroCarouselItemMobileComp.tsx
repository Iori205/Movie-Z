"use client";
import React from "react";
import { HeroTrailerDialog } from "@/components/home";
import { GoStarFill } from "react-icons/go";
import { MovieType } from "@/types";

type HeroCarouselItemMobileCompProps = {
  movie: MovieType;
  trailerKey: string;
};
export const HeroCarouselItemMobileComp = ({
  movie,
  trailerKey,
}: HeroCarouselItemMobileCompProps) => {
  return (
    <div className="sm:hidden block p-5">
      <div className="flex justify-between">
        <div>
          <div className="text-sm leading-5 text-foreground">Now Playing:</div>
          <div className="text-2xl leading-8 font-semibold text-foreground line-clamp-2">
            {movie.title}
          </div>
        </div>
        <div className="flex gap-1 mt-2.5 mb-3.5">
          <GoStarFill size={28} color="#FDE047" />
          <p className="text-lg leading-7 font-semibold text-foreground">
            {movie.vote_average.toFixed(1)}
            <span className="text-base leading-6 font-normal text-muted-foreground">
              /10
            </span>
          </p>
        </div>
      </div>
      <p className="text-sm leading-5 text-foreground mt-4 line-clamp-2">
        {movie.overview}
      </p>
      <div className="mt-4">
        <HeroTrailerDialog trailerKey={trailerKey} />
      </div>
    </div>
  );
};
