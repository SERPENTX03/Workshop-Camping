import React from "react";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
import LoadingCard from "@/components/card/LoadingCard";



export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const resolvedParams = await searchParams;

  return (
  
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer
          search={typeof resolvedParams.search === "string" ? resolvedParams.search : undefined}
          category={typeof resolvedParams.category === "string" ? resolvedParams.category : undefined}
        />
      </Suspense>

  );
}
