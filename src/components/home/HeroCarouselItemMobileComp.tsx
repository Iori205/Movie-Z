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
    <div className="sm:hidden block p-5 glass-strong rounded-2xl mx-5 -mt-16 relative z-10">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-primary mb-2">
            <span className="w-4 h-px bg-primary" />
            Now Playing
          </span>
          <h2 className="text-xl font-bold text-foreground line-clamp-2 leading-tight">
            {movie.title}
          </h2>
        </div>
        <div className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full glass shrink-0">
          <GoStarFill size={16} className="text-yellow-400" />
          <span className="text-sm font-semibold text-foreground">
            {movie.vote_average.toFixed(1)}
          </span>
        </div>
      </div>
      
      <p className="text-sm text-muted-foreground mt-4 line-clamp-2 leading-relaxed">
        {movie.overview}
      </p>
      
      <div className="mt-5">
        <HeroTrailerDialog trailerKey={trailerKey} />
      </div>
    </div>
  );
};
