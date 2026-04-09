import React from "react";
import { Skeleton } from "@/components/ui";

export const GenreMobileSkeleton = () => {
  return (
    <div className="sm:hidden block">
      <Skeleton className="w-43 h-7 mb-1 rounded-full" />
      <Skeleton className="w-[213px] h-6 rounded-full" />
      <div className="mt-5 flex flex-wrap gap-4">
        {Array.from({ length: 19 }).map((_, i) => (
          <Skeleton key={i} className="h-[22px] w-22 rounded-full" />
        ))}
      </div>
      <Skeleton className="h-7 w-52 mt-8 rounded-full" />
      <div className="flex flex-wrap gap-5 mt-8">
        {Array.from({ length: 18 }).map((_, i) => (
          <Skeleton key={i} className="w-[157.5px] h-[309.1px] rounded-md" />
        ))}
      </div>
      <Skeleton className="w-50 h-9 mt-8 justify-self-end" />
    </div>
  );
};
