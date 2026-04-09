import React from "react";
import { MovieDetailsType } from "@/types";
import { ImgComp } from "@/components/general";

type DetailsImgCompProps = {
  movieDetails: MovieDetailsType;
};

export const DetailsImgComp = ({ movieDetails }: DetailsImgCompProps) => {
  const image = movieDetails.poster_path;
  return (
    <div>
      <div className="sm:w-[290px] w-25 sm:h-107 h-37 sm:rounded-sm rounded-none overflow-hidden relative">
        <ImgComp image={image} />
      </div>
    </div>
  );
};
