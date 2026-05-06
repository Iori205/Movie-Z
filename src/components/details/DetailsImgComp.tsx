import React from "react";
import { MovieDetailsType } from "@/types";
import { ImgComp } from "@/components/general";

type DetailsImgCompProps = {
  movieDetails: MovieDetailsType;
};

export const DetailsImgComp = ({ movieDetails }: DetailsImgCompProps) => {
  const image = movieDetails.poster_path;
  return (
    <div className="group relative">
      <div className="sm:w-[290px] w-28 sm:h-[430px] h-40 rounded-2xl overflow-hidden relative glass gradient-border">
        <ImgComp image={image} />
      </div>
      {/* Glow effect behind poster */}
      <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};
