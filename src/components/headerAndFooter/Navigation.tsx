import React from "react";
import {
  NavLogo,
  NavMenuItem,
  NavInputSearch,
  NavMobileSearch,
  ThemeToggler,
} from "@/components/headerAndFooter";
import { genreResponseType } from "@/types";
import { getGenresList } from "@/utils/get-data";

export const Navigation = async () => {
  const movieGenresList: genreResponseType = await getGenresList();

  return (
    <header className="w-screen">
      <div className="sm:w-[1440px] w-full flex justify-between items-center sm:px-20 px-5 py-[11.5px] m-auto">
        <div className="sm:block hidden">
          <NavLogo />
        </div>
        <div className="sm:flex gap-6 hidden">
          <NavMenuItem movieGenresList={movieGenresList} />
          <NavInputSearch />
        </div>
        <div className="sm:hidden block w-full">
          <NavMobileSearch movieGenresList={movieGenresList} />
        </div>
        <div className="sm:block hidden">
          <ThemeToggler />
        </div>
      </div>
    </header>
  );
};
