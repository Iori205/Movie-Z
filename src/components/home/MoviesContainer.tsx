import React from "react";
import Link from "next/link";
import { MovieType } from "@/types";
import { MovieCard } from "@/components/general";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

type MoviesContainerProps = {
  movies: MovieType[];
  label: string;
  link: string;
};

export const MoviesContainer = ({
  movies,
  label,
  link,
}: MoviesContainerProps) => {
  return (
    <div className="sm:w-[1440px] w-full sm:mt-13 mt-8 sm:px-20 px-5 flex flex-col gap-8">
      <div className="w-full flex justify-between">
        <p className="text-2xl leading-8 font-semibold text-foreground">
          {label}
        </p>
        <Button asChild variant="link">
          <Link href={`/seeMore/${link}`}>
            See more <ArrowRight />
          </Link>
        </Button>
      </div>
      <div className="flex flex-wrap sm:gap-8 gap-5">
        {movies.slice(0, 10).map((movie) => (
          <Link key={movie.id} href={`/details/${movie.id}`}>
            <MovieCard
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};
