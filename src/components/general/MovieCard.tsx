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

type MovieCardProps = {
  title: string;
  score: number;
  image: string;
};

export const MovieCard = ({ title, score, image }: MovieCardProps) => {
  return (
    <Card className="group w-full p-0 overflow-hidden bg-card/50 glass border-border/30 rounded-2xl hover-lift cursor-pointer">
      {/* Image container with overlay effects */}
      <CardContent className="p-0 w-full aspect-[2/3] relative overflow-hidden">
        <ImgComp image={image} />
        
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute -inset-4 bg-primary/20 blur-2xl" />
        </div>
        
        {/* Rating badge - appears on hover */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2.5 py-1 rounded-full glass opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <GoStarFill size={14} className="text-yellow-400" />
          <span className="text-sm font-semibold text-foreground">
            {score.toFixed(1)}
          </span>
        </div>
      </CardContent>
      
      <CardFooter className="flex-col items-start p-4 gap-2 bg-gradient-to-t from-card/80 to-transparent">
        <CardDescription className="flex gap-1.5 items-center">
          <GoStarFill size={14} className="text-yellow-400" />
          <span className="text-foreground text-sm font-medium">
            {score.toFixed(1)}
            <span className="text-muted-foreground text-xs font-normal ml-0.5">
              /10
            </span>
          </span>
        </CardDescription>
        <CardTitle className="text-base sm:text-lg leading-snug text-foreground font-medium line-clamp-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
