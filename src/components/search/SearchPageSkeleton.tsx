import React from "react";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
  Skeleton,
} from "@/components/ui";
import { SearchMobileSkeleton } from "@/components/search";

export const SearchPageSkeleton = () => {
  return (
    <div className="sm:w-[1440px] w-full m-auto sm:mt-13 sm:mb-[344px] my-8 sm:px-20 px-5">
      <Skeleton className="sm:w-52 w-40 sm:h-9 h-8 rounded-full mb-8" />
      <div className="sm:block hidden">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel>
            <Skeleton className="w-70 h-7 rounded-full mb-8" />
            <div className="flex flex-wrap gap-y-8 gap-x-12">
              {Array.from({ length: 18 }).map((_, index) => (
                <Skeleton
                  key={index}
                  className="w-[165px] h-[331px] rounded-md"
                />
              ))}
            </div>
            <Skeleton className="w-80 h-9 mt-8 justify-self-end" />
          </ResizablePanel>
          <ResizableHandle withHandle className="mx-11" />
          <ResizablePanel>
            <Skeleton className="w-51 h-8 rounded-full mb-1" />
            <Skeleton className="w-54 h-6 rounded-full mb-5" />
            <div className="flex flex-wrap gap-4">
              {Array.from({ length: 19 }).map((_, i) => (
                <Skeleton key={i} className="w-21 h-[22px] rounded-full" />
              ))}
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>

      <SearchMobileSkeleton />
    </div>
  );
};
