import React from "react";
import Link from "next/link";
import { getMoviesList } from "@/utils/get-data";
import { movieResponseType } from "@/types";
import { MovieCard, PaginationComp } from "@/components/general";

type SeeMoreDynamicPageCompProps = {
  params: Promise<{
    link: string;
  }>;
  searchParams: Promise<{
    page: string;
  }>;
};
export const SeeMoreDynamicPageComp = async ({
  params,
  searchParams,
}: SeeMoreDynamicPageCompProps) => {
  const { link } = await params;
  const { page = "1" } = await searchParams;
  const movies: movieResponseType = await getMoviesList(link, page);
  const url = `/seeMore/${link}?`;
  const totalPages = movies.total_pages;

  return (
    <div className="w-screen flex flex-col items-center">
      <div className="sm:w-[1440px] w-full sm:px-20 px-5 sm:mt-13 mt-8 sm:mb-19 mb-8">
        <div className="flex flex-col gap-8">
          <div className="w-full sm:text-3xl text-2xl sm:leading-9 leading-8 font-semibold text-foreground">
            {link
              .split("_")
              .map((el) => el.charAt(0).toLocaleUpperCase() + el.slice(1))
              .join(" ")}
          </div>
          <div className="flex flex-wrap sm:gap-8 gap-5">
            {movies.results.map((mov) => (
              <Link key={mov.id} href={`/details/${mov.id}`}>
                <MovieCard
                  title={mov.title}
                  score={mov.vote_average}
                  image={mov.poster_path}
                />
              </Link>
            ))}
          </div>
          <PaginationComp url={url} page={page} totalPages={totalPages} />
        </div>
      </div>
    </div>
  );
};
