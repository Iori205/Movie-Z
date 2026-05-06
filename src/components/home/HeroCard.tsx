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
    <Card className="w-full sm:h-[85vh] h-[70vh] relative p-0 border-0 rounded-none shadow-none bg-transparent overflow-hidden">
      {/* Background image with overlay */}
      <Link href={href} className="absolute inset-0">
        <div className="relative w-full h-full">
          <ImgComp image={image} />
          {/* Multi-layer gradient overlay for cinematic depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-transparent" />
        </div>
      </Link>
      
      {/* Content overlay */}
      <div className="absolute inset-0 flex items-end sm:items-center">
        <div className="sm:max-w-[1440px] w-full mx-auto sm:px-20 px-5 pb-32 sm:pb-0">
          <div className="sm:max-w-xl">
            <CardHeader className="gap-0 p-0">
              {/* Label badge */}
              <span className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
                <span className="w-8 h-px bg-primary" />
                {label}
              </span>
              
              {/* Title with text glow */}
              <CardTitle className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground leading-tight tracking-tight text-balance">
                {title}
              </CardTitle>
              
              {/* Rating */}
              <div className="flex gap-2 items-center mt-4">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass">
                  <GoStarFill size={18} className="text-yellow-400" />
                  <span className="text-lg font-semibold text-foreground">
                    {score.toFixed(1)}
                  </span>
                  <span className="text-sm text-muted-foreground">/10</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-0 mt-6">
              <CardDescription className="text-base sm:text-lg text-foreground/70 line-clamp-3 leading-relaxed">
                {description}
              </CardDescription>
              
              <div className="mt-8 flex gap-4">
                <HeroTrailerDialog trailerKey={trailerKey} />
              </div>
            </CardContent>
          </div>
        </div>
      </div>
      
      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-primary/20 rounded-full blur-[80px] animate-float pointer-events-none sm:block hidden" />
      <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-accent/20 rounded-full blur-[60px] animate-float-delayed pointer-events-none sm:block hidden" />
    </Card>
  );
};
