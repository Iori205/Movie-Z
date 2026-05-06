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
        <div className="relative flex items-center group">
          <IoSearchOutline 
            size={18} 
            className="absolute left-4 z-10 text-muted-foreground group-focus-within:text-primary transition-colors duration-300" 
          />
          <Input
            value={searchValue}
            onChange={handleInputChange}
            type="text"
            placeholder="Search films..."
            className="sm:w-[320px] w-full pl-11 pr-4 py-2.5 glass rounded-full border-0 text-foreground text-sm placeholder:text-muted-foreground focus:ring-2 focus:ring-primary/50 transition-all duration-300"
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
        className="sm:w-[480px] w-[80vw] sm:mt-2 mt-3 p-4 rounded-2xl glass-strong border-border/50 shadow-2xl"
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
                      className={`rounded-xl transition-all duration-200 ${
                        i === index
                          ? "bg-primary/20 ring-1 ring-primary/40"
                          : "hover:bg-muted/50"
                      }`}
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
                    <Separator className="my-2 bg-border/30" />
                  </div>
                ))}
                <Button 
                  asChild 
                  variant="link" 
                  onClick={handleSeeAllResults}
                  className="text-primary hover:text-primary/80"
                >
                  <Link href={`/search?value=${searchValue}`}>
                    See all results for "{searchValue}"
                  </Link>
                </Button>
              </>
            ) : (
              <div className="flex justify-center py-8">
                <Button asChild variant="link" onClick={handleSeeAllResults} className="text-muted-foreground">
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
