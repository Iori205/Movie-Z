// import Link from "next/link";
// import { MovieCard } from "@/components/general";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// type MovieSectionProps = {
//   label: "Upcoming" | "Popular" | "Top Rated";
// };

// export const MovieSection = ({ label }: MovieSectionProps) => {
//   const url =
//     "https://api.themoviedb.org/3/movie/upcoming?api_key=75d880915800e2d2a9928e5fe720c261";
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWQ4ODA5MTU4MDBlMmQyYTk5MjhlNWZlNzIwYzI2MSIsIm5iZiI6MTc1NzQ5MzY0Ni4wNTQwMDAxLCJzdWIiOiI2OGMxMzk4ZWVkNGMzYzU0NGMwNmFkYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t_xWd75ZUn5fBdF6Khse5nZE2oVDHnnYyJ92JTb9cAM",
//     },
//   };

//   fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => console.log(json))
//     .catch((err) => console.error(err));

//   const movieCardsData = [
//     {
//       title: "Dear Santa",
//       score: 6.9,
//       image:
//         "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT5LufXuKTxUHK3QRI-MUZXyFsHAv-FVZJcRGi-G2fzdYPkqxAsV1nh4SNVWr5F09P6v928",
//       label: "Upcoming",
//     },
//     {
//       title: "How To Train Your Dragon Live Action",
//       score: 6.9,
//       image:
//         "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTLhLTo24-Thdfk9GLYhNV4Z7XgW0tldQDBjxDdF7v75EekpDZ0CWwO5bX3yN0ecYatbHQ-",

//       label: "Upcoming",
//     },
//     {
//       title: "Alien Romulus",
//       score: 6.9,
//       image:
//         "https://upload.wikimedia.org/wikipedia/en/c/cb/Alien_Romulus_2024_%28poster%29.jpg",
//       label: "Upcoming",
//     },
//     {
//       title: "From the Ashes",
//       score: 6.9,
//       image:
//         "https://m.media-amazon.com/images/M/MV5BNzg2Mzc2OTEtZGNlZS00NTk5LThlMjYtZjM5MDZiOWZiM2RiXkEyXkFqcGc@._V1_FMjpg_UY2048_.jpg",
//       label: "Upcoming",
//     },
//   ];
//   return (
//     <div className="w-[1440px] mt-13 px-20 flex gap-8 flex-wrap">
//       <div className="w-full flex justify-between">
//         <p className="text-2xl leading-8 font-semibold text-[#09090B]-foreground">
//           Upcoming
//         </p>
//         <Button asChild variant="link">
//           <Link href="/genre">
//             See more <ArrowRight />
//           </Link>
//         </Button>
//       </div>
//       {movieCardsData
//         .filter((el) => el.label === label)
//         .map((element) => (
//           <MovieCard
//             key={element.title}
//             title={element.title}
//             score={element.score}
//             image={element.image}
//           />
//         ))}
//     </div>
//   );
// };

// type MoviePopTop = {
//   id: number;
//   poster_path: string | null;
//   vote_average: number;
//   name: string;
// };

// const [moviesPopular, setMoviesPopular] = React.useState<MoviePopTop[]>([]);
// const [moviesTopRated, setMoviesTopRated] = React.useState<MoviePopTop[]>([]);

// React.useEffect(() => {
//   const url =
//     "https://api.themoviedb.org/3/tv/popular?api_key=75d880915800e2d2a9928e5fe720c261&language=en-US&page=1";
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWQ4ODA5MTU4MDBlMmQyYTk5MjhlNWZlNzIwYzI2MSIsIm5iZiI6MTc1NzQ5MzY0Ni4wNTQwMDAxLCJzdWIiOiI2OGMxMzk4ZWVkNGMzYzU0NGMwNmFkYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t_xWd75ZUn5fBdF6Khse5nZE2oVDHnnYyJ92JTb9cAM",
//     },
//   };
//   fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => setMoviesPopular(json.results))
//     .catch((err) => console.error(err));
// }, []);

// React.useEffect(() => {
//   const url =
//     "https://api.themoviedb.org/3/tv/top_rated?language=en-US&page=1";
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWQ4ODA5MTU4MDBlMmQyYTk5MjhlNWZlNzIwYzI2MSIsIm5iZiI6MTc1NzQ5MzY0Ni4wNTQwMDAxLCJzdWIiOiI2OGMxMzk4ZWVkNGMzYzU0NGMwNmFkYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t_xWd75ZUn5fBdF6Khse5nZE2oVDHnnYyJ92JTb9cAM",
//     },
//   };
//   fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => setMoviesTopRated(json.results))
//     .catch((err) => console.error(err));
// }, []);

{
  /* <div className="w-[1440px] mt-13 px-20 flex gap-8 flex-wrap">
        <div className="w-full flex justify-between">
          <p className="text-2xl leading-8 font-semibold text-foreground">
            Popular
          </p>
          <Button asChild variant="link">
            <Link href="/genre">
              See more <ArrowRight />
            </Link>
          </Button>
        </div>
        {moviesPopular.slice(0, 10).map((element) => (
          <MovieCard
            key={element.id}
            title={element.name}
            score={element.vote_average}
            image={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
          ></MovieCard>
        ))}
      </div>

      <div className="w-[1440px] mt-13 px-20 flex gap-8 flex-wrap">
        <div className="w-full flex justify-between">
          <p className="text-2xl leading-8 font-semibold text-foreground">
            Top Rated
          </p>
          <Button asChild variant="link">
            <Link href="/genre">
              See more <ArrowRight />
            </Link>
          </Button>
        </div>
        {moviesTopRated.slice(0, 10).map((element) => (
          <MovieCard
            key={element.id}
            title={element.name}
            score={element.vote_average}
            image={`https://image.tmdb.org/t/p/w500${element.poster_path}`}
          ></MovieCard>
        ))}
      </div> */
}
// nowplaying

// const [moviesNowPlaying, setMoviesNowPlaying] = React.useState<
//   MovieNowPlaying[]
// >([]);

// React.useEffect(() => {
//   const url =
//     "https://api.themoviedb.org/3/movie/now_playing?api_key=75d880915800e2d2a9928e5fe720c261&language=en-US&page=1";
//   const options = {
//     method: "GET",
//     headers: {
//       accept: "application/json",
//       Authorization:
//         "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWQ4ODA5MTU4MDBlMmQyYTk5MjhlNWZlNzIwYzI2MSIsIm5iZiI6MTc1NzQ5MzY0Ni4wNTQwMDAxLCJzdWIiOiI2OGMxMzk4ZWVkNGMzYzU0NGMwNmFkYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t_xWd75ZUn5fBdF6Khse5nZE2oVDHnnYyJ92JTb9cAM",
//     },
//   };
//   fetch(url, options)
//     .then((res) => res.json())
//     .then((json) => setMoviesNowPlaying(json.results))
//     .catch((err) => console.error(err));
// }, []);

//export default MoreLikeDynamicPage;
// searchParams: Promise<{ isSim: string }>;
// const searchP = await searchParams;
// const isSim = searchP.isSim;
// const similarMovies: movieResponseType = (await isSim)
//   ? getSimilarMovies(id)
//   : getMoviesList(type);
// <PaginationNext href={`/genre/${id}&page=${page}`} />
{
  /* <PaginationItem>
                    <PaginationLink href="">{Number(page) - 1}</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="" isActive>
                      {page}
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="">{Number(page) + 1}</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="">{Number(page) + 5}</PaginationLink>
                  </PaginationItem> */
}
// const params = await searchParams;
// const value = params.value;
// const genreId = params.genreId;
// const page = params.page || "1";

// const trailer: MovieTrailerType | undefined = movieTrailer.results.find((trailer) => trailer.type === "Trailer");
// const [movTrailer, setMovTrailer] = React.useState<MovieTrailerType>();
//<Popover open={isOpen} onOpenChange={() => setIsOpen(false)}>
// onKeyDown={(e) => {
//   if (e.key === "Enter") {
//     <Link href="/search">
//       <p>{searchValue}</p>
//     </Link>;
//   }
// }}        // onKeyDown={myFunction()}

// const components: { title: string; href: string }[] = [
//   {
//     title: "Action",
//     href: "/genre",
//   },
//   {
//     title: "Adventure",
//     href: "/docs/primitives/hover-card",
//   },
//   {
//     title: "Animation",
//     href: "/docs/primitives/progress",
//   },
//   {
//     title: "Biography",
//     href: "/docs/primitives/scroll-area",
//   },
//   {
//     title: "Comedy",
//     href: "/docs/primitives/tabs",
//   },
//   {
//     title: "Crime",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Documentary",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Drama",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Family",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Fantasy",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Film-Noir",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Game-Show",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "History",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Horror",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Music",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Musical",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Mystery",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "News",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Reality-TV",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Romance",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Sci-Fi",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Short",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Sport",
//     href: "/docs/primitives/tooltip",
//   },

//   {
//     title: "Talk-Show",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Thriller",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "War",
//     href: "/docs/primitives/tooltip",
//   },
//   {
//     title: "Western",
//     href: "/docs/primitives/tooltip",
//   },
// ];

// import React from "react";
// import { MedMovieCard } from "@/components/home";
// export const GenreMovies = () => {
//   return (
//     <div>
//       <div className="pr-12 flex flex-col gap-8">
//         <h4 className="text-xl leading-7 font-semibold text-foreground">
//           81 titles in “Animation”
//         </h4>
//         <div className="flex flex-wrap gap-y-8 gap-x-12">
//           <MedMovieCard
//             title="Solo Leveling: ReAwakening"
//             score={6.9}
//             image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
//           />
//           <MedMovieCard
//             title="Solo Leveling: ReAwakening"
//             score={6.9}
//             image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
//           />
//           <MedMovieCard
//             title="Solo Leveling: ReAwakening"
//             score={6.9}
//             image="https://m.media-amazon.com/images/M/MV5BYTIwYzk3YmQtZmMwNS00ZDAwLTk5Y2MtOTEwODFlZmExMzliXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// "use client"
// import * as React from "react";
// import Link from "next/link";
// import { MovieCard } from "@/components/home";
// import { Button } from "@/components/ui/button";
// import { ArrowRight } from "lucide-react";

// export const MovieSection = ({title, vote_average, poster_path}:MovieCardProps) => {
//   const [movieListUpComing, setMovieListUpComing] = React.useState([])
//   const url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=75d880915800e2d2a9928e5fe720c261&language=en-US';
//   const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NWQ4ODA5MTU4MDBlMmQyYTk5MjhlNWZlNzIwYzI2MSIsIm5iZiI6MTc1NzQ5MzY0Ni4wNTQwMDAxLCJzdWIiOiI2OGMxMzk4ZWVkNGMzYzU0NGMwNmFkYmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.t_xWd75ZUn5fBdF6Khse5nZE2oVDHnnYyJ92JTb9cAM'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => setMovieListUpComing(json.results))
//   .catch(err => console.error(err));
//   console.log(movieListUpComing, "movieListUpComing")

//   return (
//     <div className="w-[1440px] mt-13 px-20 flex gap-8 flex-wrap">
//       <div className="w-full flex justify-between">
//         <p className="text-2xl leading-8 font-semibold text-[#09090B]-foreground">
//           Upcoming
//         </p>
//         <Button asChild variant="link">
//           <Link href="/genre">
//             See more <ArrowRight />
//           </Link>
//         </Button>
//       </div>
//       {movieListUpComing.map((movie, id) => (
//           <MovieCard
//             key={id}
//             title={title}
//             vote_average={vote_average}
//             poster_path={`https://image.tmdb.org/t/p/w500${poster_path}`}
//           />
//         ))}
//     </div>
//   );
// };
