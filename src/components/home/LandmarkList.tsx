import React from "react";
import LandmarkCard from "../card/LandmarkCard";
import { LandmarkCardProps } from "@/utils/Types";

//Type Landmark
const LandmarkList = ({ landmarks }: { landmarks: LandmarkCardProps[] }) => {
  return (
    <section className="mt-10 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 px-10 gap-6">
        {landmarks.map((landmark) => {
          return <LandmarkCard key={landmark.id} landmark={landmark} />;
        })}
      </div>
    </section>
  );
};

export default LandmarkList;
