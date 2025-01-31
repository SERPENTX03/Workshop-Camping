import React from "react";
import LandmarkContainer from "@/components/home/LandmarkContainer";
import { Suspense } from "react";
import LoadingCard from "@/components/card/LoadingCard";

interface PageProps {
  searchParams: { search?: string; category?: string };
}

const page = ({ searchParams }: PageProps) => {
  const { search, category } = searchParams;
  return (
    <section>
      <Suspense fallback={<LoadingCard />}>
        <LandmarkContainer search={search} category={category} />
      </Suspense>
    </section>
  );
};

export default page;