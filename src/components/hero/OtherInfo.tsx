import React from "react";
import { LandmarkCardProps } from "@/utils/Types";

const OtherInfo = ({ landmark }: { landmark: LandmarkCardProps }) => {
  return (
    <div className="text-white">
      <p>{landmark.province}</p>
      <p className="text-2xl md:text-3xl lg:text-4xl font-semibold">{landmark.name}</p>
      <p className="font-extralight text-sm md:text-base">{landmark.description.substring(0,100)+'...'}</p>
    </div>
  );
};

export default OtherInfo;
