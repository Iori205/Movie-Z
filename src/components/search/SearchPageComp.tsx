import React from "react";
import Link from "next/link";
import { SearchListCard, SearchMobileComp } from "@/components/search";
import {
  MedMovieCard,
  NoResultsMsgComp,
  PaginationComp,
} from "@/components/general";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui";
import { movieResponseType, genreResponseType } from "@/types";
import { getMoviesBySearch, getGenresList } from "@/utils/get-data";

type SearchPageCompProps = {
  searchParams: Promise<{
    value: string;
    genreId: string;
    page: string;
  }>;
};

export const SearchPageComp = async ({ searchParams }: SearchPageCompProps) => {
  const movieGenresList: genreResponseType = await getGenresList();
  const { value, genreId, page = "1" } = await searchParams;
  const searchedMovies: movieResponseType = await getMoviesBySearch(
    value,
    page
  );
  const filteredMovies = genreId
    ? searchedMovies.results.filter((movie) =>
        movie.genre_ids.includes(Number(genreId))
      )
    : searchedMovies.results;
  const url = `/search?value=${value}&`;

  const totalPages =
    genreId && filteredMovies && filteredMovies.length < 20
      ? 1
      : searchedMovies && searchedMovies.total_pages
      ? searchedMovies.total_pages
      : 1;

  let resultNumber = 0;
  if (genreId && filteredMovies) {
    resultNumber = filteredMovies.length;
  } else if (searchedMovies && searchedMovies.total_results) {
    resultNumber = searchedMovies.total_results;
  }

  return (
    <div className="w-screen flex flex-col items-center pt-24">
      {/* Ambient background effects */}
      <div className="fixed top-1/4 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative z-10 sm:max-w-[1440px] w-full sm:px-20 px-5 flex flex-col gap-10 sm:mt-8 mt-4 mb-16">
        <div className="flex items-center gap-4">
          <div className="w-1 h-10 rounded-full bg-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-glow-cyan">
            Search Results
          </h2>
        </div>
        
        <div className="sm:block hidden">
          <ResizablePanelGroup direction="horizontal" className="gap-8">
            <ResizablePanel defaultSize={70}>
              <div className="flex flex-col gap-8">
                <h4 className="text-xl font-semibold text-foreground">
                  <span className="text-primary">{resultNumber.toLocaleString("en")}</span>
                  {" "}results for "{value}"{" "}
                  {genreId &&
                    movieGenresList.genres
                      .filter((genre) => genre.id === Number(genreId))
                      .map((el) => (
                        <span key={el.id} className="text-muted-foreground">
                          in {el.name}
                        </span>
                      ))}
                </h4>
                {resultNumber > 0 && totalPages !== 0 ? (
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredMovies.slice(0, 16).map((movSearched) => (
                      <Link
                        key={movSearched.id}
                        href={`/details/${movSearched.id}`}
                      >
                        <MedMovieCard
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
            </ResizablePanel>
            <ResizableHandle withHandle className="bg-border/30" />
            <ResizablePanel defaultSize={30} minSize={20}>
              <div className="glass rounded-2xl p-6">
                <SearchListCard searchValue={value} genreId={genreId} />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>

        <SearchMobileComp
          movieGenresList={movieGenresList}
          resultNumber={resultNumber}
          value={value}
          totalPages={totalPages}
          filteredMovies={filteredMovies}
          url={url}
          page={page}
          genreId={genreId}
        />
      </div>
    </div>
  );
};
