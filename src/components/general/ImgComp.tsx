import React from "react";
import Image from "next/image";

type ImgCompProps = {
  image: string;
};

export const ImgComp = ({ image }: ImgCompProps) => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {image ? (
        <Image
          src={`https://image.tmdb.org/t/p/original${image}`}
          alt=""
          fill
          unoptimized
          priority
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-muted/30">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full glass flex items-center justify-center">
              <span className="text-2xl text-muted-foreground">?</span>
            </div>
            <span className="text-sm text-muted-foreground">Coming Soon</span>
          </div>
        </div>
      )}
    </div>
  );
};
