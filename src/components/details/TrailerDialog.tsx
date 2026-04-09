import React from "react";
import { Dialog, DialogTrigger, Button } from "@/components/ui";
import { LuPlay } from "react-icons/lu";
import { TrailerContentComp } from "@/components/general";

export const TrailerDialog = ({
  trailerKey,
}: {
  trailerKey: string | undefined;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex gap-3 items-center absolute bottom-6 left-6">
          <Button
            variant="outline"
            className="w-10 h-10 rounded-full border-0 bg-white"
          >
            <LuPlay size={16} />
          </Button>
          <span className="text-base leading-6 text-white">Play Trailer</span>
        </div>
      </DialogTrigger>
      <TrailerContentComp trailerKey={trailerKey} />
    </Dialog>
  );
};
