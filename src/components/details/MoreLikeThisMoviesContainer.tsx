import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import { MiniMovieCard, MovieCard } from "@/components/general";
import { MovieType } from "@/types";

type MoreLikeThisMoviesContainerProps = {
  id: string;
  similarMovies: MovieType[];
};
export const MoreLikeThisMoviesContainer = ({
  id,
  similarMovies,
}: MoreLikeThisMoviesContainerProps) => {
  return (
    <div className="flex flex-col gap-8 sm:px-0 px-5">
      <div className="w-full flex justify-between">
        <h3 className="text-2xl leading-8 font-semibold text-foreground">
          More like this
        </h3>
        <Button asChild variant="link">
          <Link href={`/moreLike/${id}`}>
            See more <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="flex sm:gap-8 gap-5 sm:overflow-x-auto overflow-x-scroll">
        {similarMovies.slice(0, 5).map((simMov) => (
          <Link key={simMov.id} href={`/details/${simMov.id}`}>
            <div className="sm:block hidden">
              <MiniMovieCard
                title={simMov.title}
                score={simMov.vote_average}
                image={simMov.poster_path}
              />
            </div>
            <div className="sm:hidden block">
              <MovieCard
                title={simMov.title}
                score={simMov.vote_average}
                image={simMov.poster_path}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
