import React, { Suspense } from "react";
import { GenrePageComp, GenrePageSkeleton } from "@/components/genre";
import { getGenresList } from "@/utils/get-data";
import { genreResponseType } from "@/types";

type GenrePageProps = {
  searchParams: Promise<{
    id: string;
    page: string;
    name: string;
  }>;
};

export const generateMetadata = async ({ searchParams }: GenrePageProps) => {
  const movieGenresList: genreResponseType = await getGenresList();
  const { id } = await searchParams;
  const genreName = movieGenresList.genres.find(
    (genre) => genre.id === Number(id)
  );

  return {
    title: `MovieZ | Genre: ${genreName?.name}`,
  };
};

const GenrePage = ({ searchParams }: GenrePageProps) => {
  return (
    <Suspense fallback={<GenrePageSkeleton />}>
      <GenrePageComp searchParams={searchParams} />
    </Suspense>
  );
};
export default GenrePage;
