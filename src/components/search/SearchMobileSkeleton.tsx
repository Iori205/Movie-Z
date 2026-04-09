import React from "react";
import { Skeleton } from "@/components/ui";

export const SearchMobileSkeleton = () => {
  return (
    <div>
      <div className="sm:hidden block">
        <Skeleton className="w-[199px] h-7 rounded-full mb-8" />
        <div className="flex flex-wrap gap-5 mb-8">
          {Array.from({ length: 18 }).map((_, i) => (
            <Skeleton key={i} className="w-[157.5px] h-[309.1px] rounded-md" />
          ))}
        </div>
        <Skeleton className="w-50 h-9 mb-8 justify-self-end" />
        <Skeleton className="w-40 h-7 rounded-full mb-1" />
        <Skeleton className="w-[213px] h-6 rounded-full mb-5" />
        <div className="flex flex-wrap gap-4">
          {Array.from({ length: 19 }).map((_, i) => (
            <Skeleton key={i} className="w-23 h-[22px] rounded-full" />
          ))}
        </div>
      </div>
    </div>
  );
};
