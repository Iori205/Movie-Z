import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";
import { MiniMovieCard, MovieCard } from "@/components/general";
import { MovieType } from "@/types";

type MoreLikeThisMoviesContainerProps = {
  id: string;
  similarMovies: MovieType[];
};

export const MoreLikeThisMoviesContainer = ({
  id,
  similarMovies,
}: MoreLikeThisMoviesContainerProps) => {
  return (
    <section className="flex flex-col gap-8 sm:px-0 px-5 mt-16">
      {/* Section header */}
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-1 h-8 rounded-full bg-accent" />
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground text-glow-purple">
            More Like This
          </h3>
        </div>
        <Button 
          asChild 
          variant="ghost" 
          className="group gap-2 text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-full px-4"
        >
          <Link href={`/moreLike/${id}`}>
            <span>See more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
      
      {/* Movie cards */}
      <div className="flex sm:gap-6 gap-4 sm:overflow-x-auto overflow-x-scroll pb-4 -mb-4 scrollbar-hide">
        {similarMovies.slice(0, 5).map((simMov) => (
          <Link 
            key={simMov.id} 
            href={`/details/${simMov.id}`}
            className="shrink-0"
          >
            <div className="sm:block hidden">
              <MiniMovieCard
                title={simMov.title}
                score={simMov.vote_average}
                image={simMov.poster_path}
              />
            </div>
            <div className="sm:hidden block">
              <MovieCard
                title={simMov.title}
                score={simMov.vote_average}
                image={simMov.poster_path}
              />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};
