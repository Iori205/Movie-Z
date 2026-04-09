import React from "react";
import Link from "next/link";
import {
  MovieCard,
  PaginationComp,
  NoResultsMsgComp,
} from "@/components/general";
import { movieResponseType } from "@/types";
import { getSimilarMovies } from "@/utils/get-data";

type MoreLikeDynamicPageCompProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page: string }>;
};
export const MoreLikeDynamicPageComp = async ({
  params,
  searchParams,
}: MoreLikeDynamicPageCompProps) => {
  const { id } = await params;
  const { page = "1" } = await searchParams;
  const similarMovies: movieResponseType = await getSimilarMovies(id, page);
  const url = `/moreLike/${id}?`;
  const totalPages = similarMovies.total_pages;
  const resultNumber = similarMovies.total_results;

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="sm:w-[1440px] w-full sm:px-20 px-5 flex flex-col gap-8 sm:mt-13 sm:mb-19 my-8">
        <h3 className="w-full sm:text-3xl text-2xl sm:leading-9 leading-8 font-semibold text-foreground">
          More like this
        </h3>
        {resultNumber > 0 && totalPages !== 0 ? (
          <div className="flex flex-wrap sm:gap-8 gap-5">
            {similarMovies.results.map((simMov) => (
              <Link key={simMov.id} href={`/details/${simMov.id}`}>
                <MovieCard
                  title={simMov.title}
                  score={simMov.vote_average}
                  image={simMov.poster_path}
                />
              </Link>
            ))}
          </div>
        ) : (
          <NoResultsMsgComp />
        )}
        <PaginationComp url={url} page={page} totalPages={totalPages} />
      </div>
    </div>
  );
};
