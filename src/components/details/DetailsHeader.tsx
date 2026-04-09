import React from "react";
import { Dot } from "lucide-react";
import { GoStarFill } from "react-icons/go";
import { MovieDetailsType } from "@/types";

type DetailsHeaderProps = {
  movieDetails: MovieDetailsType;
};
export const DetailsHeader = ({ movieDetails }: DetailsHeaderProps) => {
  return (
    <div className="sm:mx-0 mx-5 flex justify-between sm:mb-6 mb-4">
      <div className="flex flex-col gap-1">
        <h1 className="sm:text-4xl text-2xl sm:leading-10 leading-8 sm:font-bold font-semibold text-foreground sm:text-nowrap text-wrap">
          {movieDetails.title}
        </h1>
        <p className="flex sm:text-lg text-sm sm:leading-7 leading-5 text-foreground">
          {movieDetails.release_date}
          <Dot className="sm:w-7 w-5 sm:h-7 h-5 stroke-white-[1px]" />
          {movieDetails.adult ? "R" : "G"}
          <Dot className="sm:w-7 w-5 sm:h-7 h-5" />
          {movieDetails.runtime >= 60
            ? `${Math.floor(movieDetails.runtime / 60)}h ${
                movieDetails.runtime % 60 > 0
                  ? `${movieDetails.runtime % 60}m`
                  : ""
              }`
            : `${movieDetails.runtime}m`}
        </p>
      </div>
      <div className="sm:py-1 pt-1 pr-3 sm:ml-0 ml-5">
        <p className="text-xs leading-4 font-medium text-foreground sm:opacity-100 opacity-0">
          Rating
        </p>
        <div className="flex items-center gap-1">
          <GoStarFill className="sm:w-7 w-6 sm:h-7 h-6" color="#FDE047" />
          <div className="flex flex-col sm:py-0.5 py-0">
            <p className="sm:text-lg text-sm sm:leading-7 leading-5 sm:font-semibold font-bold text-foreground">
              {movieDetails.vote_average.toFixed(1)}
              <span className="sm:text-base text-sm sm:leading-6 leading-5 font-normal text-muted-foreground">
                /10
              </span>
            </p>
            <div className="text-xs leading-4 text-muted-foreground">
              {movieDetails.vote_count >= 1000
                ? `${Math.floor(movieDetails.vote_count / 1000)}k`
                : movieDetails.vote_count}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
