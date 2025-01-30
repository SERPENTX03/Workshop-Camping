import React from "react";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
import LoadingCard from "@/components/card/LoadingCard";

const page = async ({
  searchParams,
}: {
  searchParams: { search?: string, category?:string };
}) => {
  const { search,category } = await searchParams;
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search} category={category} />
      </Suspense>
    </section>
  );
};

export default page;
