import React from "react";
import { Skeleton } from "@/components/ui";
import { Film } from "lucide-react";

export const HomePageSkeleton = () => {
  return (
    <div className="w-screen flex flex-col items-center">
      {/* Hero skeleton */}
      <div className="w-full sm:h-[85vh] h-[70vh] relative">
        <Skeleton className="w-full h-full rounded-none">
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="relative">
              <Film size={80} className="text-primary/30 animate-pulse" />
              <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full animate-pulse" />
            </div>
            <p className="mt-6 text-muted-foreground text-sm animate-pulse">Loading cinematic experience...</p>
          </div>
        </Skeleton>
      </div>
      
      {/* Mobile hero info skeleton */}
      <div className="sm:hidden block w-full px-5 -mt-16 relative z-10">
        <div className="glass-strong rounded-2xl p-5 space-y-4">
          <div className="flex justify-between items-start">
            <div className="flex-1 space-y-2">
              <Skeleton className="h-4 w-20 rounded-full" />
              <Skeleton className="h-6 w-40 rounded-full" />
            </div>
            <Skeleton className="h-8 w-16 rounded-full" />
          </div>
          <Skeleton className="h-4 w-full rounded-full" />
          <Skeleton className="h-4 w-3/4 rounded-full" />
          <Skeleton className="h-12 w-40 rounded-full mt-4" />
        </div>
      </div>

      {/* Movie sections skeleton */}
      <div className="w-full relative">
        {Array.from({ length: 3 }).map((_, sectionIndex) => (
          <section
            key={sectionIndex}
            className="sm:max-w-[1440px] w-full sm:mt-20 mt-12 sm:px-20 px-5 mx-auto flex flex-col gap-8"
          >
            {/* Section header */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Skeleton className="w-1 h-8 rounded-full" />
                <Skeleton className="h-10 w-40 rounded-full" />
              </div>
              <Skeleton className="h-10 w-24 rounded-full" />
            </div>
            
            {/* Movie grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
              {Array.from({ length: 10 }).map((_, cardIndex) => (
                <div key={cardIndex} className="glass rounded-2xl overflow-hidden">
                  <Skeleton className="w-full aspect-[2/3]" />
                  <div className="p-4 space-y-2">
                    <Skeleton className="h-4 w-16 rounded-full" />
                    <Skeleton className="h-5 w-full rounded-full" />
                    <Skeleton className="h-5 w-3/4 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};
