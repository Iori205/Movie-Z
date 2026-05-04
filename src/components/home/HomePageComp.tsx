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
    <div className="w-screen flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full">
        <HeroCarousel movies={nowPlayingMovies.results} />
      </section>
      
      {/* Movies Sections with layered depth */}
      <div className="w-full relative">
        {/* Ambient glow effects for sections */}
        <div className="absolute top-20 left-0 w-[400px] h-[400px] bg-glow-purple/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-[600px] right-0 w-[500px] h-[500px] bg-glow-cyan/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="absolute top-[1200px] left-1/4 w-[400px] h-[400px] bg-glow-green/10 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="relative z-10">
          <MoviesContainer
            movies={upComingMovies.results}
            label="Upcoming"
            link="upcoming"
            accentColor="cyan"
          />
          <MoviesContainer
            movies={popularMovies.results}
            label="Popular"
            link="popular"
            accentColor="purple"
          />
          <MoviesContainer
            movies={topRatedMovies.results}
            label="Top Rated"
            link="top_rated"
            accentColor="green"
          />
        </div>
      </div>
    </div>
  );
};
