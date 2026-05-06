import React from "react";
import Link from "next/link";
import { MovieType } from "@/types";
import { MovieCard } from "@/components/general";
import { Button } from "@/components/ui";
import { ArrowRight } from "lucide-react";

type MoviesContainerProps = {
  movies: MovieType[];
  label: string;
  link: string;
  accentColor?: "cyan" | "purple" | "green";
};

export const MoviesContainer = ({
  movies,
  label,
  link,
  accentColor = "cyan",
}: MoviesContainerProps) => {
  const glowClass = {
    cyan: "text-glow-cyan",
    purple: "text-glow-purple",
    green: "",
  }[accentColor];
  
  const accentColorClass = {
    cyan: "text-primary",
    purple: "text-accent",
    green: "text-chart-3",
  }[accentColor];

  return (
    <section className="sm:max-w-[1440px] w-full sm:mt-20 mt-12 sm:px-20 px-5 flex flex-col gap-8">
      {/* Section header */}
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className={`w-1 h-8 rounded-full bg-current ${accentColorClass}`} />
          <h2 className={`text-3xl sm:text-4xl font-bold text-foreground tracking-tight ${glowClass}`}>
            {label}
          </h2>
        </div>
        <Button 
          asChild 
          variant="ghost" 
          className="group gap-2 text-muted-foreground hover:text-foreground hover:bg-muted/30 rounded-full px-4"
        >
          <Link href={`/seeMore/${link}`}>
            <span>See more</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </div>
      
      {/* Movie grid with staggered reveal feel */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
        {movies.slice(0, 10).map((movie, index) => (
          <Link 
            key={movie.id} 
            href={`/details/${movie.id}`}
            className="group"
            style={{ 
              animationDelay: `${index * 50}ms`,
            }}
          >
            <MovieCard
              title={movie.title}
              score={movie.vote_average}
              image={movie.poster_path}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};
