import React from "react";
import Link from "next/link";
import { GenreType, MovieType } from "@/types";
import { FaChevronRight } from "react-icons/fa6";
import {
  Card,
  CardContent,
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
    <Card className="p-0 border-none shadow-none gap-5 bg-background">
      <CardHeader className="p-0 gap-1">
        <CardTitle className="sm:text-2xl text-xl sm:leading-8 leading-7 text-foreground">
          <span className="sm:block hidden">Genres</span>
          <span className="sm:hidden block">Search by genre</span>
        </CardTitle>
        <CardDescription className="text-base leading-6 text-foreground">
          See lists of movies by genre
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 flex flex-wrap gap-4">
        {genres.map((genre) => (
          <Link
            key={genre.id}
            href={`/genre?id=${genre.id}&name=${genre.name}`}
          >
            <Badge
              variant="outline"
              className={`leading-4 font-semibold rounded-full pl-2.5 pr-1 gap-2 ${
                genre.id === Number(id) && "bg-primary text-primary-foreground"
              }`}
            >
              {genre.name}
              <FaChevronRight size={16} color="foreground" />
            </Badge>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};
