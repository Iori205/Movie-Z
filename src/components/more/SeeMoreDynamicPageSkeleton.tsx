import React from "react";
import { Skeleton } from "@/components/ui";

export const SeeMoreDynamicPageSkeleton = () => {
  return (
    <div className="sm:w-[1440px] w-auto m-auto sm:px-20 px-5 sm:mt-13 sm:mb-19 my-8">
      <Skeleton className="w-[143px] h-9 rounded-full mb-8" />
      <div className="flex flex-wrap sm:gap-8 gap-5">
        {Array.from({ length: 20 }).map((_, i) => (
          <Skeleton
            key={i}
            className="sm:w-[230px] w-[157.5px] sm:h-[439px] h-[309.1px] rounded-lg"
          />
        ))}
      </div>
      <Skeleton className="sm:w-80 w-50 h-9 mt-8 flex justify-self-end" />
    </div>
  );
};
