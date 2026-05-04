import React from "react";
import { DialogContent, DialogDescription, DialogTitle } from "@/components/ui";

export const TrailerContentComp = ({
  trailerKey,
}: {
  trailerKey: string | undefined;
}) => {
  return (
    <DialogContent className="sm:max-w-[90vw] sm:w-[1100px] max-w-full w-full p-0 border-none bg-transparent rounded-2xl overflow-hidden flex justify-center items-center gap-0">
      <DialogTitle className="sr-only">Trailer</DialogTitle>
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden glow-purple">
        <iframe
          src={`//www.youtube-nocookie.com/embed/${trailerKey}?autoplay=1&rel=0`}
          allowFullScreen
          allow="autoplay; encrypted-media"
          className="w-full h-full bg-black"
        />
      </div>
      <DialogDescription className="sr-only">Movie trailer video player</DialogDescription>
    </DialogContent>
  );
};
