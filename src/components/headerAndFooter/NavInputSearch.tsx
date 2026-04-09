"use client";
import { useState } from "react";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { movieResponseType } from "@/types";
import { getMoviesBySearch } from "@/utils/get-data";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
  Separator,
  Button,
} from "@/components/ui";
import { TinyMovieCard } from "@/components/general";
import { useRouter } from "next/navigation";
import { NavLoading } from "./NavLoading";

export const NavInputSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [foundMovies, setFoundMovies] = useState<movieResponseType | null>(
    null
  );
  const [isOpen, setIsOpen] = useState(false);
  const [index, setIndex] = useState<number>(-1);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSearchValue(value);
    setIndex(-1);
    if (value.length === 0) {
      setIsOpen(false);
      setFoundMovies(null);
      setIsLoading(false);
      return;
    }
    setIsOpen(true);
    setIsLoading(true);
    const searchedMovies = await getMoviesBySearch(value, "1");
    setFoundMovies(searchedMovies);
    setIsLoading(false);
  };

  function handleSeeAllResults() {
    setIsOpen(false);
    setSearchValue("");
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!foundMovies?.results?.length) return;
    switch (e.key) {
      case "Enter":
        e.preventDefault();
        if (index >= 0 && index < foundMovies.results.length) {
          const selectedMovie = foundMovies.results[index];
          router.push(`/details/${selectedMovie.id}`);
        } else if (searchValue.trim()) {
          router.push(`/search?value=${encodeURIComponent(searchValue)}`);
        }
        setIsOpen(false);
        setSearchValue("");
        setIndex(-1);
        break;
      case "ArrowUp":
        e.preventDefault();
        setIndex((prev) =>
          prev <= 0 ? foundMovies.results.length - 1 : prev - 1
        );
        break;
      case "ArrowDown":
        e.preventDefault();
        setIndex((prev) =>
          prev >= foundMovies.results.length - 1 ? 0 : prev + 1
        );
        break;
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger>
        <div className="flex items-center">
          <IoSearchOutline size={16} className="-mr-7" color="#71717A" />
          <Input
            value={searchValue}
            onChange={handleInputChange}
            type="text"
            placeholder="Search.."
            className="sm:w-[379px] w-full px-3 sm:py-2 py-3 pl-[38px] sm:border border-border-foreground border-0 rounded-lg text-foreground text-sm leading-5 flex items-center sm:shadow shadow-none"
            onKeyDown={handleKeyDown}
          />
        </div>
      </PopoverTrigger>
      <PopoverContent
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
        side="bottom"
        align="center"
        alignOffset={-100}
        className="sm:w-[577px] w-[80vw] sm:mt-[4.5px] mt-[11.5px] p-3 rounded-lg mx-5"
      >
        <div>
          {isLoading ? (
            <NavLoading />
          ) : foundMovies ? (
            foundMovies.results.length > 0 ? (
              <>
                {foundMovies?.results.slice(0, 5).map((movSearched, i) => (
                  <div key={movSearched.id}>
                    <div
                      className={
                        i === index
                          ? "bg-muted-foreground rounded-xl py-0.5 px-0.5"
                          : ""
                      }
                      onMouseEnter={() => setIndex(i)}
                      onClick={() => {
                        setIsOpen(false);
                        setSearchValue("");
                        setIndex(-1);
                        router.push(`/details/${movSearched.id}`);
                      }}
                    >
                      <TinyMovieCard
                        image={movSearched.poster_path}
                        title={movSearched.title}
                        score={movSearched.vote_average}
                        year={movSearched.release_date}
                        href={`/details/${movSearched.id}`}
                      />
                    </div>
                    <Separator className="my-2" />
                  </div>
                ))}
                <Button asChild variant="link" onClick={handleSeeAllResults}>
                  <Link href={`/search?value=${searchValue}`}>
                    See all results for "{searchValue}"
                  </Link>
                </Button>
              </>
            ) : (
              <div className="flex justify-center mt-[32.5px] mb-[24.5px]">
                <Button asChild variant="link" onClick={handleSeeAllResults}>
                  <Link href={`/search?value=${searchValue}`}>
                    No results found.
                  </Link>
                </Button>
              </div>
            )
          ) : null}
        </div>
      </PopoverContent>
    </Popover>
  );
};
