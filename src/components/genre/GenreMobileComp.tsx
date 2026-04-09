import React from "react";
import Link from "next/link";
import { GenresListCard } from "@/components/genre";
import { MovieCard, PaginationComp } from "@/components/general";
import { genreResponseType, movieResponseType } from "@/types";

type GenreMobileCompProps = {
  filteredMoviesByGenreId: movieResponseType;
  movieGenresList: genreResponseType;
  id: string;
  name: string;
  url: string;
  page: string;
  totalPages: number;
};
export const GenreMobileComp = ({
  filteredMoviesByGenreId,
  movieGenresList,
  id,
  name,
  url,
  page,
  totalPages,
}: GenreMobileCompProps) => {
  return (
    <div className="sm:hidden block">
      <GenresListCard genres={movieGenresList.genres} id={id} />
      <div className="flex flex-col gap-8 mt-8">
        <h4 className="w-full text-xl leading-7 font-semibold text-foreground">
          {filteredMoviesByGenreId.total_results.toLocaleString("en")} titles in
          "{name}"
        </h4>
        <div className="flex flex-wrap gap-5">
          {filteredMoviesByGenreId.results.slice(0, 18).map((movie) => (
            <Link key={movie.id} href={`/details/${movie.id}`}>
              <MovieCard
                title={movie.title}
                score={movie.vote_average}
                image={movie.poster_path}
              />
            </Link>
          ))}
        </div>
        <PaginationComp url={url} page={page} totalPages={totalPages} />
      </div>
    </div>
  );
};
