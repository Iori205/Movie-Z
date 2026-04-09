import React, { Suspense } from "react";
import {
  SeeMoreDynamicPageComp,
  SeeMoreDynamicPageSkeleton,
} from "@/components/more";

type SeeMorePageProps = {
  params: Promise<{ link: string }>;
  searchParams: Promise<{ page: string }>;
};

export const generateMetadata = async ({ params }: SeeMorePageProps) => {
  const { link } = await params;

  return {
    title: `MovieZ | ${link
      .split("_")
      .map((el) => el.charAt(0).toLocaleUpperCase() + el.slice(1))
      .join(" ")} Movies`,
  };
};

const SeeMorePage = ({ params, searchParams }: SeeMorePageProps) => {
  return (
    <Suspense fallback={<SeeMoreDynamicPageSkeleton />}>
      <SeeMoreDynamicPageComp searchParams={searchParams} params={params} />
    </Suspense>
  );
};
export default SeeMorePage;
