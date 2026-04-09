import React from "react";
import { Skeleton } from "@/components/ui";
import { TbLoaderQuarter } from "react-icons/tb";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export const HomePageSkeleton = () => {
  return (
    <div className="sm:w-[1440px] w-full m-auto sm:mt-6 mt-0 sm:mb-[51px] mb-8">
      <Skeleton className="sm:w-[1440px] w-full sm:h-[600px] aspect-[125/82] rounded-none flex justify-center items-center">
        <TbLoaderQuarter size={200} className="animate-spin sm:block hidden" />
        <AiOutlineLoading3Quarters
          size={100}
          className="animate-spin sm:hidden block"
        />
      </Skeleton>
      <div className="sm:hidden block p-5">
        <div className="w-full flex justify-between mb-4">
          <div className="w-[101px] flex flex-col gap-1">
            <Skeleton className="h-[18px] rounded-full" />
            <Skeleton className="h-[30px] rounded-full" />
          </div>
          <Skeleton className="w-[101px] h-[30px] rounded-full"></Skeleton>
        </div>
        <div className="w-full flex flex-col gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <Skeleton key={i} className="w-full h-5 rounded-full" />
          ))}
          <Skeleton className="w-[249px] h-5 rounded-full" />
        </div>
        <Skeleton className="mt-6 w-[169px] h-10 rounded-full"></Skeleton>
      </div>
      {Array.from({ length: 3 }).map((_, index) => (
        <div
          key={index}
          className="sm:w-[1440px] w-full sm:mt-13 mt-8 sm:px-20 px-5 flex sm:gap-8 gap-5 flex-wrap"
        >
          <div className="w-full flex justify-between">
            <Skeleton className="sm:w-[250px] w-[145px] h-8 rounded-full" />
            <Skeleton className="sm:w-[165px] w-[125px] h-9 rounded-full" />
          </div>
          <div className="w-full flex flex-wrap gap-8">
            {Array.from({ length: 10 }).map((_, i) => (
              <Skeleton
                key={i}
                className="sm:w-[230px] w-[157.5px] sm:h-[439px] h-[309.1px] rounded-lg"
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
