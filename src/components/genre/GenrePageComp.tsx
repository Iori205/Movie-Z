import React from "react";
import Link from "next/link";
import { MedMovieCard, PaginationComp } from "@/components/general";
import { GenreMobileComp, GenresListCard } from "@/components/genre";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui";
import { genreResponseType, movieResponseType } from "@/types";
import { getGenresList, getMoviesByGenreId } from "@/utils/get-data";

type GenrePageCompProps = {
  searchParams: Promise<{
    id: string;
    page: string;
    name: string;
  }>;
};

export const GenrePageComp = async ({ searchParams }: GenrePageCompProps) => {
  const movieGenresList: genreResponseType = await getGenresList();
  const params = await searchParams;
  const id = params.id;
  const page = params.page || "1";
  const name = params.name;
  const filteredMoviesByGenreId: movieResponseType = await getMoviesByGenreId(
    id,
    page
  );
  const url = `/genre/?id=${id}&name=${name}&`;
  const totalPages = filteredMoviesByGenreId.total_pages;

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="sm:w-[1440px] w-full sm:pl-20 sm:pr-32 px-5 flex flex-col gap-8 sm:mt-13 mt-8 mb-8">
        <h2 className="w-full sm:text-3xl text-2xl sm:leading-9 leading-8 font-semibold text-foreground">
          Search filter
        </h2>
        <div className="sm:block hidden">
          <ResizablePanelGroup direction="horizontal">
            <ResizablePanel>
              <GenresListCard genres={movieGenresList.genres} id={id} />
            </ResizablePanel>
            <ResizableHandle withHandle className="mx-5" />
            <ResizablePanel>
              <div className="flex flex-wrap gap-y-8 gap-x-12">
                <h4 className="w-full text-xl leading-7 font-semibold text-foreground">
                  {filteredMoviesByGenreId.total_results.toLocaleString("en")}{" "}
                  titles in "{name}"
                </h4>
                {filteredMoviesByGenreId.results.slice(0, 18).map((movie) => (
                  <Link key={movie.id} href={`/details/${movie.id}`}>
                    <MedMovieCard
                      title={movie.title}
                      score={movie.vote_average}
                      image={movie.poster_path}
                    />
                  </Link>
                ))}
                <PaginationComp url={url} page={page} totalPages={totalPages} />
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>

        <GenreMobileComp
          filteredMoviesByGenreId={filteredMoviesByGenreId}
          movieGenresList={movieGenresList}
          id={id}
          name={name}
          url={url}
          page={page}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};
