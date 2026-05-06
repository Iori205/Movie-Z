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
    <Card className="group w-[200px] p-0 overflow-hidden bg-card/50 glass border-border/30 rounded-xl hover-lift cursor-pointer">
      <CardContent className="p-0 relative overflow-hidden">
        <div className="w-full aspect-[2/3] relative">
          <ImgComp image={image} />
        </div>
        {/* Hover overlay with glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </CardContent>
      <CardFooter className="flex flex-col items-start p-3 gap-2 bg-gradient-to-t from-card/80 to-transparent">
        <CardDescription className="flex gap-1.5 items-center">
          <GoStarFill size={14} className="text-yellow-400" />
          <span className="text-foreground text-sm font-medium">
            {score.toFixed(1)}
            <span className="text-muted-foreground text-xs font-normal ml-0.5">
              /10
            </span>
          </span>
        </CardDescription>
        <CardTitle className="text-base leading-snug text-foreground font-medium min-h-12 line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
