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
        <button className="group flex gap-3 items-center absolute bottom-6 left-6 cursor-pointer">
          <div className="relative">
            <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
              <LuPlay size={20} className="text-foreground ml-1" />
            </div>
            {/* Pulse effect */}
            <div className="absolute inset-0 rounded-full border border-foreground/30 animate-ping opacity-30" />
          </div>
          <span className="text-base font-medium text-foreground text-glow-cyan">
            Play Trailer
          </span>
        </button>
      </DialogTrigger>
      <TrailerContentComp trailerKey={trailerKey} />
    </Dialog>
  );
};
