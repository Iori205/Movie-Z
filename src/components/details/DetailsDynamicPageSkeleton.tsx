import React from "react";
import { Skeleton, Separator } from "@/components/ui";

export const DetailsDynamicPageSkeleton = () => {
  return (
    <div className="sm:w-[1440px] w-full m-auto sm:pl-45 sm:pr-[178px] px-5 sm:mt-13 sm:mb-[112.62px] my-8">
      <div className="flex justify-between sm:mb-6 mb-4">
        <div>
          <Skeleton className="sm:w-78 w-[218px] sm:h-10 h-8 rounded-full mb-1" />
          <Skeleton className="sm:w-[237px] w-[181px] sm:h-7 h-5 rounded-full" />
        </div>
        <div>
          <Skeleton className="sm:w-[83px] w-[71px] h-4 rounded-full mb-0.5 sm:opacity-100 opacity-0" />
          <div className="flex gap-1 items-center">
            <Skeleton className="sm:w-7 w-6 sm:h-7 h-6 rounded-full" />
            <div className="sm-w-[51px] w-[43px]">
              <Skeleton className="sm:h-7 h-5 rounded-full mb-0.5" />
              <Skeleton className="h-4 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Skeleton className="w-[290px] h-107 rounded-lg sm:block hidden" />
        <Skeleton className="sm:w-190 w-full sm:h-107 aspect-[16/9] sm:rounded-lg rounded-none" />
      </div>
      <div className="sm:block flex gap-[34px]">
        <div className="sm:hidden block mt-8">
          <Skeleton className="w-25 h-37 rounded-none" />
        </div>
        <div className="sm:block flex flex-col">
          <div className="flex gap-3 mt-8 sm:flex-nowrap flex-wrap">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="w-18 h-5 rounded-full" />
            ))}
          </div>
          <div className="sm:block hidden">
            <Skeleton className="w-full mt-5 h-6 rounded-full" />
            <Skeleton className="w-[699px] mt-1 h-6 rounded-full" />
          </div>
          <div className="sm:hidden flex flex-col gap-1 mt-5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="w-full h-5 rounded-full" />
            ))}
            <Skeleton className="w-30 h-5 rounded-full" />
          </div>
        </div>
      </div>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i}>
          <div className="mt-5 flex gap-[53px]">
            <Skeleton className="w-16 h-7 rounded-full" />
            <Skeleton className="sm:w-90 w-[218px] h-7 rounded-full" />
          </div>
          <Separator className="mt-2 mb-1" />
        </div>
      ))}
      <div className="flex justify-between my-8">
        <Skeleton className="sm:w-[250px] w-37 h-8 rounded-full" />
        <Skeleton className="sm:w-[165px] w-30 h-9 rounded-full" />
      </div>
      <div className="sm:flex hidden gap-8">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="w-[190px] h-93 rounded-lg" />
        ))}
      </div>
      <div className="sm:hidden flex gap-5">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="w-[157.5px] h-[309.1px] rounded-lg" />
        ))}
      </div>
    </div>
  );
};
