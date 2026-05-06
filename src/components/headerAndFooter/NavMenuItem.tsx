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
import { ChevronRight, Layers } from "lucide-react";
import { genreResponseType } from "@/types";

type NavMenuItemProps = {
  movieGenresList: genreResponseType;
};
export const NavMenuItem = ({ movieGenresList }: NavMenuItemProps) => {
  return (
    <NavigationMenu viewport={true}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger className="gap-2 glass rounded-full border-0 text-foreground hover:bg-muted/50 data-[state=open]:bg-muted/50 transition-all duration-300">
            <Layers size={16} className="text-primary" />
            <span className="sm:block hidden">Genres</span>
          </NavigationMenuTrigger>
          <NavigationMenuContent className="p-6 glass-strong rounded-2xl border-border/50">
            <h3 className="text-2xl leading-8 font-bold text-foreground mb-1 text-glow-cyan">
              Explore Genres
            </h3>
            <p className="text-sm text-muted-foreground">
              Discover films by category
            </p>
            <Separator className="my-4 bg-border/30" />
            <div className="sm:w-[520px] w-[calc(80vw-20px)] flex gap-3 flex-wrap">
              {movieGenresList.genres.map((genre) => (
                <Link
                  key={genre.id}
                  href={`/genre?id=${genre.id}&name=${genre.name}`}
                >
                  <Badge
                    variant="outline"
                    className="leading-4 font-medium rounded-full pl-3 pr-2 py-1.5 gap-1.5 border-border/50 bg-muted/30 hover:bg-primary/20 hover:border-primary/50 hover:text-primary transition-all duration-300 cursor-pointer"
                  >
                    {genre.name}
                    <ChevronRight size={14} className="opacity-50" />
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
