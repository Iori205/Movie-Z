import React from "react";
import Link from "next/link";
import { GenreType } from "@/types";
import { ChevronRight } from "lucide-react";
import {
  CardDescription,
  CardHeader,
  CardTitle,
  Badge,
} from "@/components/ui";

type GenresListCardProps = {
  genres: GenreType[];
  id: string;
};

export const GenresListCard = ({ genres, id }: GenresListCardProps) => {
  return (
    <div className="space-y-6">
      <CardHeader className="p-0 gap-2">
        <CardTitle className="text-xl font-bold text-foreground">
          <span className="sm:block hidden">Genres</span>
          <span className="sm:hidden block">Search by Genre</span>
        </CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          Discover films by category
        </CardDescription>
      </CardHeader>
      <div className="flex flex-wrap gap-2">
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={`/genre?id=${genre.id}&name=${genre.name}`}
          >
            <Badge
              variant="outline"
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
                genre.id === Number(id) 
                  ? "bg-primary text-primary-foreground border-primary glow-cyan" 
                  : "border-border/50 bg-muted/30 hover:bg-primary/20 hover:border-primary/50 hover:text-primary"
              }`}
            >
              {genre.name}
              <ChevronRight size={14} className="ml-1 opacity-50" />
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
};
