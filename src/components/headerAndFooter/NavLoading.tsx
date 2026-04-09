import React from "react";
import { Spinner } from "@/components/ui";

export const NavLoading = () => {
  return (
    <div className="flex justify-center">
      <Spinner className="size-[37px] sm:mt-[37.5px] sm:mb-[29.5px] my-[33.5px]" />
    </div>
  );
};
