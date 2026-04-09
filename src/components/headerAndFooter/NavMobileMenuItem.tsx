"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  Badge,
  Separator,
  Button,
} from "@/components/ui";
import { ChevronRight } from "lucide-react";
import { genreResponseType } from "@/types";
import { IoChevronDown } from "react-icons/io5";

type NavMobileMenuItemProps = {
  movieGenresList: genreResponseType;
};

export const NavMobileMenuItem = ({
  movieGenresList,
}: NavMobileMenuItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  function handleCloseSheet() {
    setIsOpen(false);
  }
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button variant="outline">
          <IoChevronDown size={16} />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="p-5 top-[52px] w-[85vw] rounded-lg gap-0 mx-5"
        side="top"
      >
        <SheetHeader className="p-0 gap-1">
          <SheetTitle className="text-2xl leading-8">Genres</SheetTitle>
          <SheetDescription className="text-base leading-6 text-foreground">
            See lists of movies by genre
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-4" />
        <div className="flex gap-4 flex-wrap">
          {movieGenresList.genres.map((genre) => (
            <Link
              key={genre.id}
              href={`/genre?id=${genre.id}&name=${genre.name}`}
              onClick={handleCloseSheet}
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
      </SheetContent>
    </Sheet>
  );
};
