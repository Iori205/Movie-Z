"use client";
import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";
import { Button } from "@/components/ui";
import {
  NavInputSearch,
  NavLogo,
  ThemeToggler,
  NavMobileMenuItem,
} from "@/components/headerAndFooter";
import { genreResponseType } from "@/types";

type NavMobileSearchProps = {
  movieGenresList: genreResponseType;
};
export const NavMobileSearch = ({ movieGenresList }: NavMobileSearchProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="w-full">
      {isOpen ? (
        <div className="flex items-center justify-between">
          <div className="mr-6">
            <NavMobileMenuItem movieGenresList={movieGenresList} />
          </div>
          <NavInputSearch />
          <Button variant={"ghost"} onClick={() => setIsOpen(false)}>
            X
          </Button>
        </div>
      ) : (
        <div className="flex justify-between">
          <NavLogo />
          <div>
            <Button
              variant="outline"
              className="w-9 h-9 mr-3"
              onClick={() => setIsOpen(true)}
            >
              <IoSearchOutline />
            </Button>
            <ThemeToggler />
          </div>
        </div>
      )}
    </div>
  );
};
