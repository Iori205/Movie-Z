import React from "react";
import { Dot } from "lucide-react";
import { GoStarFill } from "react-icons/go";
import { MovieDetailsType } from "@/types";

type DetailsHeaderProps = {
  movieDetails: MovieDetailsType;
};
export const DetailsHeader = ({ movieDetails }: DetailsHeaderProps) => {
  return (
    <div className="sm:mx-0 mx-5 flex justify-between sm:mb-8 mb-6">
      <div className="flex flex-col gap-2">
        <h1 className="sm:text-5xl text-2xl sm:leading-tight leading-8 font-bold text-foreground text-balance text-glow-cyan">
          {movieDetails.title}
        </h1>
        <div className="flex items-center text-muted-foreground sm:text-base text-sm">
          <span>{movieDetails.release_date}</span>
          <Dot className="w-5 h-5" />
          <span className="px-2 py-0.5 rounded glass text-xs font-medium">
            {movieDetails.adult ? "R" : "G"}
          </span>
          <Dot className="w-5 h-5" />
          <span>
            {movieDetails.runtime >= 60
              ? `${Math.floor(movieDetails.runtime / 60)}h ${
                  movieDetails.runtime % 60 > 0
                    ? `${movieDetails.runtime % 60}m`
                    : ""
                }`
              : `${movieDetails.runtime}m`}
          </span>
        </div>
      </div>
      
      <div className="flex flex-col items-end gap-1">
        <span className="text-xs uppercase tracking-wider text-muted-foreground font-medium">
          Rating
        </span>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl glass">
          <GoStarFill className="w-6 h-6 text-yellow-400" />
          <div className="flex flex-col">
            <span className="text-lg font-bold text-foreground leading-tight">
              {movieDetails.vote_average.toFixed(1)}
              <span className="text-sm font-normal text-muted-foreground">/10</span>
            </span>
            <span className="text-xs text-muted-foreground">
              {movieDetails.vote_count >= 1000
                ? `${Math.floor(movieDetails.vote_count / 1000)}k votes`
                : `${movieDetails.vote_count} votes`}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
