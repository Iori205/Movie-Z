import React from "react";
import {
  NavLogo,
  NavMenuItem,
  NavInputSearch,
  NavMobileSearch,
} from "@/components/headerAndFooter";
import { genreResponseType } from "@/types";
import { getGenresList } from "@/utils/get-data";

export const Navigation = async () => {
  const movieGenresList: genreResponseType = await getGenresList();

  return (
    <header className="w-screen fixed top-0 left-0 z-50">
      <div className="absolute inset-0 glass-strong" />
      <div className="relative sm:max-w-[1440px] w-full flex justify-between items-center sm:px-20 px-5 py-4 m-auto">
        <div className="sm:block hidden">
          <NavLogo />
        </div>
        <div className="sm:flex gap-8 hidden items-center">
          <NavMenuItem movieGenresList={movieGenresList} />
          <NavInputSearch />
        </div>
        <div className="sm:hidden block w-full">
          <NavMobileSearch movieGenresList={movieGenresList} />
        </div>
      </div>
    </header>
  );
};
