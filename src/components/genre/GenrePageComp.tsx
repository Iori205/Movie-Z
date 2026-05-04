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
    <div className="w-screen flex flex-col items-center pt-24">
      {/* Ambient background effects */}
      <div className="fixed top-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="relative z-10 sm:max-w-[1440px] w-full sm:px-20 px-5 flex flex-col gap-10 sm:mt-8 mt-4 mb-16">
        <div className="flex items-center gap-4">
          <div className="w-1 h-10 rounded-full bg-primary" />
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground text-glow-cyan">
            Search Filter
          </h2>
        </div>
        
        <div className="sm:block hidden">
          <ResizablePanelGroup direction="horizontal" className="gap-8">
            <ResizablePanel defaultSize={30} minSize={20}>
              <div className="glass rounded-2xl p-6">
                <GenresListCard genres={movieGenresList.genres} id={id} />
              </div>
            </ResizablePanel>
            <ResizableHandle withHandle className="bg-border/30 data-[panel-group-direction=vertical]:h-px" />
            <ResizablePanel defaultSize={70}>
              <div className="flex flex-col gap-8">
                <h4 className="text-xl font-semibold text-foreground">
                  <span className="text-primary">{filteredMoviesByGenreId.total_results.toLocaleString("en")}</span>
                  {" "}titles in "{name}"
                </h4>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {filteredMoviesByGenreId.results.slice(0, 16).map((movie) => (
                    <Link key={movie.id} href={`/details/${movie.id}`}>
                      <MedMovieCard
                        title={movie.title}
                        score={movie.vote_average}
                        image={movie.poster_path}
                      />
                    </Link>
                  ))}
                </div>
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
