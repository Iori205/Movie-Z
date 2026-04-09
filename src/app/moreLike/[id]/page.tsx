import React, { Suspense } from "react";
import {
  MoreLikeDynamicPageComp,
  MoreLikeDynamicPageSkeleton,
} from "@/components/more";

type MoreLikePageProps = {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ page: string }>;
};

const MoreLikePage = ({ params, searchParams }: MoreLikePageProps) => {
  return (
    <Suspense fallback={<MoreLikeDynamicPageSkeleton />}>
      <MoreLikeDynamicPageComp params={params} searchParams={searchParams} />
    </Suspense>
  );
};
export default MoreLikePage;
