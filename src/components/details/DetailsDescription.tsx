import React from "react";
import { Badge, Separator } from "@/components/ui";
import { MovieDetailsType, movieCreditsResponseType } from "@/types";
import { DetailsImgComp } from "@/components/details";

type DetailsDescriptionProps = {
  movieDetails: MovieDetailsType;
  movieCredits: movieCreditsResponseType;
};

export const DetailsDescription = ({
  movieDetails,
  movieCredits,
}: DetailsDescriptionProps) => {
  const directorNames = movieCredits.crew
    .filter((movCrew) => movCrew.job === "Director")
    .map((movCrew) => movCrew.name);

  const writersNames = movieCredits.crew
    .filter(
      (el) =>
        el.job === "Writer" ||
        el.job === "Original Story" ||
        el.job === "Story" ||
        el.job === "Characters" ||
        el.job === "Comic Book" ||
        el.job === "Screenplay"
    )
    .map((el) => el.name)
    .filter((el, i, arr) => arr.indexOf(el) === i);

  const starsNames = movieCredits.cast
    .filter((movCast) => movCast.order < 4)
    .map((movCast) => movCast.name);

  const detailedInfo = [
    { job: "Director", names: directorNames },
    { job: "Writers", names: writersNames },
    { job: "Stars", names: starsNames },
  ];

  return (
    <div className="sm:px-0 px-5 my-10">
      <div className="flex gap-8">
        <div className="sm:hidden inline-block shrink-0">
          <DetailsImgComp movieDetails={movieDetails} />
        </div>
        <div className="flex-1">
          {/* Genres */}
          <div className="flex gap-2 flex-wrap mb-6">
            {movieDetails.genres.map((movDetail) => (
              <Badge
                key={movDetail.id}
                variant="outline"
                className="rounded-full px-4 py-1.5 text-sm font-medium border-border/50 bg-muted/30 hover:bg-primary/20 hover:border-primary/50 transition-colors"
              >
                {movDetail.name}
              </Badge>
            ))}
          </div>
          
          {/* Overview */}
          <p className="text-base sm:text-lg leading-relaxed text-foreground/80">
            {movieDetails.overview}
          </p>
        </div>
      </div>

      {/* Credits section */}
      <div className="mt-10 space-y-4">
        {detailedInfo.map((el, i) => (
          <div key={i} className="glass rounded-xl p-4">
            <div className="flex items-start gap-6">
              <span className="text-sm uppercase tracking-wider text-primary font-semibold min-w-20">
                {el.job}
              </span>
              <div className="flex flex-wrap gap-2">
                {el.names.map((name, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 rounded-full bg-muted/50 text-sm text-foreground"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
