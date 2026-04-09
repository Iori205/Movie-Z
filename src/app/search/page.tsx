import React, { Suspense } from "react";
import { SearchPageComp, SearchPageSkeleton } from "@/components/search";

type SearchPageProps = {
  searchParams: Promise<{
    value: string;
    genreId: string;
    page: string;
  }>;
};

export const generateMetadata = async ({ searchParams }: SearchPageProps) => {
  const { value } = await searchParams;

  return {
    title: `MovieZ | Search Results for "${value}"`,
  };
};

const SearchPage = ({ searchParams }: SearchPageProps) => {
  return (
    <Suspense fallback={<SearchPageSkeleton />}>
      <SearchPageComp searchParams={searchParams} />
    </Suspense>
  );
};
export default SearchPage;
