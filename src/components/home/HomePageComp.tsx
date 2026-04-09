import * as React from "react";
import { MoviesContainer } from "@/components/home";
import { HeroCarousel } from "@/components/home/HeroCarousel";
import { getMoviesList } from "@/utils/get-data";
import { movieResponseType } from "@/types";

export const HomePageComp = async () => {
  const upComingMovies: movieResponseType = await getMoviesList(
    "upcoming",
    "1"
  );
  const popularMovies: movieResponseType = await getMoviesList("popular", "1");
  const topRatedMovies: movieResponseType = await getMoviesList(
    "top_rated",
    "1"
  );
  const nowPlayingMovies: movieResponseType = await getMoviesList(
    "now_playing",
    "1"
  );
  return (
    <div className="w-screen flex flex-col items-center sm:mt-6 mt:0 sm:mb-[51px] mb-8">
      <HeroCarousel movies={nowPlayingMovies.results} />
      <MoviesContainer
        movies={upComingMovies.results}
        label="Upcoming"
        link="upcoming"
      />
      <MoviesContainer
        movies={popularMovies.results}
        label="Popular"
        link="popular"
      />
      <MoviesContainer
        movies={topRatedMovies.results}
        label="Top Rated"
        link="top_rated"
      />
    </div>
  );
};
