import React from "react";
import { Skeleton } from "../ui/skeleton";

const LoadingCard = () => {
  return (
    <div className="mt-10 px-4 max-w-6xl mx-auto">
    <SkeletonCartHero />
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 gap-6 mt-10">
        <SkeletonCart/>
        <SkeletonCart/>
        <SkeletonCart/>
        <SkeletonCart/>
        <SkeletonCart/>
        <SkeletonCart/>
        <SkeletonCart/>
        <SkeletonCart/>
    </div>
    </div>
  );
};

export const SkeletonCart = () => {
  return (
    <div>
      <Skeleton className="w-full mb-2 md:h-80 h-60" />
      <Skeleton className="w-3/4 mb-2 md:h-4 h-2" />
      <Skeleton className="w-1/2 md:h-4 h-2" />
    </div>
  );
};
export const SkeletonCartHero = () => {
  return (
    <div>
      <Skeleton className="w-full mb-2 md:h-72 h-52" />
      <Skeleton className="w-3/4 mb-2 md:h-4 h-2" />
      <Skeleton className="w-1/2 mb-8 md:h-4 h-2" />
      <Skeleton className="w-full md:h-12 h-8 " />
    </div>
  );
};
export default LoadingCard;

