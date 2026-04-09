import React from "react";
import { GoStarFill } from "react-icons/go";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui";
import { ImgComp } from "@/components/general";

type MiniMovieCardProps = {
  title: string;
  score: number;
  image: string;
};

export const MiniMovieCard = ({ title, score, image }: MiniMovieCardProps) => {
  return (
    <Card className="w-[190px] p-0 overflow-hidden bg-secondary gap-1">
      <CardContent className="p-0">
        <div className="w-full h-[281.3px] relative">
          <ImgComp image={image} />
        </div>
      </CardContent>
      <CardFooter className="flex flex-col items-start px-2 py-1">
        <CardDescription className="flex gap-1 items-center mb-[3px]">
          <GoStarFill size={16} color="#FDE047" />
          <p className="text-foreground text-sm leading-5 font-medium">
            {score.toFixed(1)}
            <span className="text-muted-foreground text-xs leading-4 font-normal">
              /10
            </span>
          </p>
        </CardDescription>
        <CardTitle className="text-lg leading-7 text-foreground font-normal min-h-14 line-clamp-2 hover:underline">
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
