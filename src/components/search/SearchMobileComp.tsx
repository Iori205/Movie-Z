import React from "react";
import Link from "next/link";
import {
  MovieCard,
  NoResultsMsgComp,
  PaginationComp,
} from "@/components/general";
import { SearchListCard } from "@/components/search";
import { MovieType, genreResponseType } from "@/types";

type SearchMobileCompProps = {
  resultNumber: number;
  value: string;
  totalPages: number;
  filteredMovies: MovieType[];
  url: string;
  page: string;
  genreId: string;
  movieGenresList: genreResponseType;
};

export const SearchMobileComp = ({
  resultNumber,
  value,
  totalPages,
  filteredMovies,
  url,
  page,
  genreId,
  movieGenresList,
}: SearchMobileCompProps) => {
  return (
    <div className="sm:hidden block">
      <div className="flex flex-col gap-8 mb-8">
        <h4 className="text-xl leading-7 font-semibold text-foreground">
          {resultNumber.toLocaleString("en")} results for "{value}"{" "}
          {genreId &&
            movieGenresList.genres
              .filter((genre) => genre.id === Number(genreId))
              .map((el) => <span key={el.id}>in {el.name}</span>)}
        </h4>
        {resultNumber > 0 && totalPages !== 0 ? (
          <div className="flex flex-wrap gap-5">
            {filteredMovies.slice(0, 18).map((movSearched) => (
              <Link key={movSearched.id} href={`/details/${movSearched.id}`}>
                <MovieCard
                  title={movSearched.title}
                  score={movSearched.vote_average}
                  image={movSearched.poster_path}
                />
              </Link>
            ))}
          </div>
        ) : (
          <NoResultsMsgComp />
        )}
        <PaginationComp url={url} page={page} totalPages={totalPages} />
      </div>
      <SearchListCard searchValue={value} genreId={genreId} />
    </div>
  );
};
