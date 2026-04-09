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
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div>
            <div className="sm:block hidden items-center absolute bottom-6 left-6">
              <Button variant="secondary">
                <LuPlay size={16} /> Watch Trailer
              </Button>
            </div>
            <div className="sm:hidden block">
              <Button>
                <LuPlay size={16} /> Watch Trailer
              </Button>
            </div>
          </div>
        </DialogTrigger>
        <TrailerContentComp trailerKey={trailerKey} />
      </Dialog>
    </div>
  );
};
