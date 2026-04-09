import * as React from "react";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui";
import { HeroTrailerDialog } from "@/components/home";
import { GoStarFill } from "react-icons/go";
import { ImgComp } from "@/components/general";

type HeroCardProps = {
  image: string;
  label: string;
  title: string;
  score: number;
  description: string;
  trailerKey: string | undefined;
  href: string;
};

export const HeroCard = ({
  image,
  label,
  title,
  score,
  description,
  trailerKey,
  href,
}: HeroCardProps) => {
  return (
    <Card className="sm:w-[1440px] w-full sm:h-150 aspect-[125/82] relative p-0 border-0 rounded-none shadow-none">
      <Link href={href} className="relative w-full h-full">
        <ImgComp image={image} />
      </Link>
      <div className="absolute top-[178px] left-29 flex-col gap-4 sm:block hidden">
        <CardHeader className="gap-0">
          <p className="text-base leading-6 text-white">{label}</p>
          <CardTitle className="text-4xl leading-10 font-bold text-white">
            {title}
          </CardTitle>
          <div className="flex gap-1 items-center">
            <GoStarFill size={28} color="#FDE047" />
            <p className="text-lg leading-7 font-semibold text-[#FAFAFA] py-2.5">
              {score.toFixed(1)}
              <span className="text-base leading-6 font-normal text-muted-foreground">
                /10
              </span>
            </p>
          </div>
        </CardHeader>
        <CardContent>
          <CardDescription className="w-[302px] text-xs leading-4 text-[#FAFAFA] line-clamp-5">
            {description}
          </CardDescription>
          <div className="mt-20">
            <HeroTrailerDialog trailerKey={trailerKey} />
          </div>
        </CardContent>
      </div>
    </Card>
  );
};
