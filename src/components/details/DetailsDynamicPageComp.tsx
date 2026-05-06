import React from "react";
import {
  MovieDetailsType,
  movieTrailerResponseType,
  movieCreditsResponseType,
  movieResponseType,
} from "@/types";
import {
  getMovieDetails,
  getMovieCredits,
  getMovieTrailer,
  getSimilarMovies,
} from "@/utils/get-data";
import {
  DetailsHeader,
  DetailsDescription,
  MoreLikeThisMoviesContainer,
  TrailerDialog,
  DetailsImgComp,
} from "@/components/details";
import { ImgComp } from "@/components/general";

type DetailsDynamicPageCompProps = {
  params: Promise<{ id: string }>;
};

export const DetailsDynamicPageComp = async ({
  params,
}: DetailsDynamicPageCompProps) => {
  const dynamicParams = await params;
  const id = dynamicParams.id;
  const movieDetails: MovieDetailsType = await getMovieDetails(id);
  const movieCredits: movieCreditsResponseType = await getMovieCredits(id);
  const movieTrailer: movieTrailerResponseType = await getMovieTrailer(id);
  const similarMovies: movieResponseType = await getSimilarMovies(id, "1");
  const trailer = movieTrailer.results.find(
    (trailer) => trailer.type === "Trailer"
  );
  const image = movieDetails.backdrop_path;

  return (
    <div className="w-screen flex flex-col items-center pt-24">
      {/* Background hero image with overlay */}
      <div className="absolute top-0 left-0 right-0 h-[60vh] overflow-hidden pointer-events-none">
        <div className="absolute inset-0">
          <ImgComp image={image} />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/60 via-transparent to-background/60" />
        </div>
        {/* Ambient glow */}
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-primary/20 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-accent/20 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 sm:max-w-[1440px] w-full sm:px-20 px-0 sm:mt-8 mt-4 sm:mb-20 mb-8">
        <DetailsHeader movieDetails={movieDetails} />
        
        {/* Media section */}
        <div className="w-full sm:flex gap-8 block">
          <div className="sm:block hidden shrink-0">
            <DetailsImgComp movieDetails={movieDetails} />
          </div>
          <div className="sm:flex-1 w-full sm:aspect-video aspect-[16/9] rounded-2xl overflow-hidden relative glass">
            <ImgComp image={image} />
            <TrailerDialog trailerKey={trailer?.key} />
          </div>
        </div>
        
        <DetailsDescription
          movieDetails={movieDetails}
          movieCredits={movieCredits}
        />
        
        <MoreLikeThisMoviesContainer
          similarMovies={similarMovies.results}
          id={id}
        />
      </div>
    </div>
  );
};
