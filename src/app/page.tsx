import React from "react";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
import LoadingCard from "@/components/card/LoadingCard";

interface PageProps {
  searchParams?: Record<string, string | undefined>;
}

const Page = ({ searchParams }: PageProps) => {
  const search = searchParams?.search;
  const category = searchParams?.category;

  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search} category={category} />
      </Suspense>
    </section>
  );
};

export default Page;
