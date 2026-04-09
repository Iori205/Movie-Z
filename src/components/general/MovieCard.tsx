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
    <Card className="sm:w-[230px] w-[157.5px] p-0 overflow-hidden bg-secondary sm:gap-1 gap-0 rounded-lg">
      <CardContent className="p-0 w-full sm:h-85 h-[233.1px] relative">
        <ImgComp image={image} />
      </CardContent>
      <CardFooter className="flex-col items-start p-2 sm:gap-0 gap-1">
        <CardDescription className="flex gap-1 items-center sm:mb-[3px] mb-0">
          <GoStarFill size={16} color="#FDE047" />
          <p className="text-foreground sm:text-sm text-xs sm:leading-5 leading-4 font-medium">
            {score.toFixed(1)}
            <span className="text-muted-foreground text-xs leading-4 font-normal">
              /10
            </span>
          </p>
        </CardDescription>
        <CardTitle className="sm:text-lg text-sm sm:leading-7 leading-5 text-foreground font-normal sm:min-h-14 min-h-10 line-clamp-2 hover:underline">
          {title}
        </CardTitle>
      </CardFooter>
    </Card>
  );
};
