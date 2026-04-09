import React from "react";
import { Skeleton } from "@/components/ui";

export const MoreLikeDynamicPageSkeleton = () => {
  return (
    <div className="sm:w-[1440px] w-full m-auto sm:px-20 px-5 sm:mt-13 sm:mb-19 my-8">
      <Skeleton className="sm:w-46 w-37 sm:h-9 h-8 rounded-full mb-8" />
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
