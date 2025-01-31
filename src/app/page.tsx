import React from "react";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
import LoadingCard from "@/components/card/LoadingCard";

type SearchParams = {
  search?: string;
  category?: string;
};

export default async function Page({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  // Await the entire searchParams object first
  const resolvedParams = await Promise.resolve(searchParams);

  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer 
          search={resolvedParams.search} 
          category={resolvedParams.category}
        />
      </Suspense>
    </section>
  );
}