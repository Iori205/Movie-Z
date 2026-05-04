import React from "react";
import { Dialog, DialogTrigger, Button } from "@/components/ui";
import { LuPlay } from "react-icons/lu";
import { TrailerContentComp } from "@/components/general";

export const HeroTrailerDialog = ({
  trailerKey,
}: {
  trailerKey: string | undefined;
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          size="lg"
          className="group relative overflow-hidden rounded-full px-8 py-6 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-all duration-300 glow-cyan"
        >
          <span className="relative z-10 flex items-center gap-2">
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary-foreground/20 group-hover:bg-primary-foreground/30 transition-colors">
              <LuPlay size={16} className="ml-0.5" />
            </span>
            Watch Trailer
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        </Button>
      </DialogTrigger>
      <TrailerContentComp trailerKey={trailerKey} />
    </Dialog>
  );
};
