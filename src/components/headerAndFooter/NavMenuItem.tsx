"use client";
import * as React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  Separator,
  Badge,
} from "@/components/ui";
import { ChevronRight } from "lucide-react";
import { genreResponseType } from "@/types";

type NavMenuItemProps = {
  movieGenresList: genreResponseType;
};
export const NavMenuItem = ({ movieGenresList }: NavMenuItemProps) => {
  return (
    <NavigationMenu viewport={true}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="gap-2 border border-input text-secondary-foreground shadow-xs">
            <span className="sm:block hidden">Genre</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-5">
            <h3 className="text-2xl leading-8 font-semibold text-foreground mb-1">
              Genres
            </h3>
            <p className="text-base leading-6 text-foreground">
              See lists of movies by genre
            </p>
            <Separator className="my-4" />
            <div className="sm:w-[577px] w-[calc(80vw-20px)] flex gap-4 flex-wrap">
              {movieGenresList.genres.map((genre) => (
                <Link
                  key={genre.id}
                  href={`/genre?id=${genre.id}&name=${genre.name}`}
                >
                  <Badge
                    variant="outline"
                    className="leading-4 font-semibold rounded-full pl-2.5 pr-1 gap-2"
                  >
                    {genre.name}
                    <ChevronRight size={16} />
                  </Badge>
                </Link>
              ))}
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};
