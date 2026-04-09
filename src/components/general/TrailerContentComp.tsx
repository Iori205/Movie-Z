import React from "react";
import { DialogContent, DialogDescription, DialogTitle } from "@/components/ui";

export const TrailerContentComp = ({
  trailerKey,
}: {
  trailerKey: string | undefined;
}) => {
  return (
    <DialogContent className="sm:min-w-[997px] min-w-full sm:min-h-[561px] min-h-full p-0 border-none bg-black rounded-none flex justify-center items-center gap-0">
      <DialogTitle className="hidden bg-black" />
      <iframe
        src={`//www.youtube-nocookie.com/embed/${trailerKey}`}
        allowFullScreen
        className="sm:w-[997px] min-w-full sm:h-[561px] aspect-[16/9] bg-black"
      />
      <DialogDescription className="hidden bg-black" />
    </DialogContent>
  );
};
